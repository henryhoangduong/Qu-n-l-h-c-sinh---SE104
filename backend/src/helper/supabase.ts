import { createClient } from '@supabase/supabase-js';

export class Supabase {
  static avatarBucket = 'avatars';

  static supabase = createClient(
    'https://wmnmernievmlbxiyghgq.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indtbm1lcm5pZXZtbGJ4aXlnaGdxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTk1MTc2NCwiZXhwIjoyMDI1NTI3NzY0fQ.tn1Z3a7P7gbWc4hDrfTa6nBk5R4Ld3-LbdwJQwBlQgY',
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
