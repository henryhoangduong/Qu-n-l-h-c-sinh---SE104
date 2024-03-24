"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
require("dotenv/config");
class Supabase {
    static async uploadFile(bucket, file) {
        const currentTime = new Date().getTime();
        const uuid = crypto.randomUUID();
        const fileName = `${bucket}-${currentTime}-${uuid}-${file['originalname']}`;
        await this.supabase.storage.from(bucket).upload(fileName, file['buffer'], {
            cacheControl: '3600',
            upsert: false,
            contentType: file['mimetype'],
        });
        const publicUrl = this.supabase.storage.from(bucket).getPublicUrl(fileName);
        return publicUrl.data.publicUrl;
    }
}
exports.Supabase = Supabase;
Supabase.avatarBucket = 'avatars';
Supabase.supabase = (0, supabase_js_1.createClient)(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
//# sourceMappingURL=supabase.js.map