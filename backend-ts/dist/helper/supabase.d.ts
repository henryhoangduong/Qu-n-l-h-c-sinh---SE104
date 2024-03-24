import 'dotenv/config';
export declare class Supabase {
    static avatarBucket: string;
    static supabase: import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
    static uploadFile(bucket: string, file: File): Promise<string>;
}
