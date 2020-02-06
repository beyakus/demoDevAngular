export interface ResponseUser {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: DataUser[];
}

export interface DataUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}