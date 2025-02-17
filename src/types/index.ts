export interface Task {
    id: number;
    title: string;
    description?: string;
    is_completed: boolean;
    is_important: boolean;
}

export interface User {
    id: number;
    username: string;
    email: string;
}