import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DishTableItem {
  name: string;
  id: number;
  price?: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DishTableItem[] = [
  {id: 1, name: 'Hamburger', price: 5.80},
  {id: 2, name: 'Cheeseburger', price: 8.80},
  {id: 3, name: 'Marguerite', price: 7.50},
  {id: 4, name: 'Reine', price: 8.80},
  {id: 5, name: 'Royale', price: 5.50},
  {id: 6, name: 'Verde', price: 8.90},
  {id: 7, name: 'Crêpe beurre', price: 6.50},
  {id: 8, name: 'Crêpe sucrée', price: 8.80},
  {id: 9, name: 'Crêpe salée', price: 7.20},
  {id: 10, name: 'Neon', price: 8.80},
  {id: 11, name: 'Sodium', price: 8.90},
  {id: 12, name: 'Magnesium', price: 4.30},
  {id: 13, name: 'Aluminum', price: 8.80},
  {id: 14, name: 'Silicon', price: 5.60},
  {id: 15, name: 'Phosphorus', price: 8.80},
  {id: 16, name: 'Sulfur', price: 8.80},
  {id: 17, name: 'Chlorine', price: 6.60},
  {id: 18, name: 'Argon', price: 3.90},
  {id: 19, name: 'Potassium', price: 2.50},
  {id: 20, name: 'Calcium', price: 1.50},
];

/**
 * Data source for the DishTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DishTableDataSource extends DataSource<DishTableItem> {
  data: DishTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DishTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DishTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DishTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'price': return compare(+a.price, +b.price, isAsc);

        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
