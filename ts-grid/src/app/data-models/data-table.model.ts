

// MODEL FOR COLUMNS
export interface ColumnModel {
    field: string;
    header: string;
    filterType?: string;
    filterWidth?: string;
    filterPlaceholder?: string;
    typeWidth?: string;
}


// TABULAR ACTIONS
export interface TableActions {
    edit?: boolean;
    delete?: boolean;
    view?: string;
}
