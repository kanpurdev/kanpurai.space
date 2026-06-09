export interface Member {
    id: string;
    name: string;
    email: string;
    role: string;
    feedback: string;
    is_active: boolean;
    created_at: string;
}

export interface MemberInsert {
    name: string;
    email: string;
    role: string;
    feedback: string;
}
