import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

export class Supabase {
  static avatarBucket = 'avatars';

  static supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  static async uploadFile(bucket: string, file: File): Promise<string> {
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
