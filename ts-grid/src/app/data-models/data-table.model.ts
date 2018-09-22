

// MODEL FOR COLUMNS
export interface ColumnModel {
    field: string;
    header: string;
    filterType?: string;
    filterPlaceholder?: string;
}


// TABULAR ACTIONS
export interface TableActions {
    edit?: boolean;
    delete?: boolean;
    view?: string;
}
