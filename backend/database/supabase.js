const supabase = require('@supabase/supabase-js');
require("dotenv").config('../.env');

const client = supabase.createClient(
  "https://ffyxaeddsjurhuljnfnf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmeXhhZWRkc2p1cmh1bGpuZm5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzM3OTIsImV4cCI6MjAyNTA0OTc5Mn0.qPqERj0_S550XF54hnzkzsKCJmbBPuP3BgFB0KeB - cU"
);

module.exports = client;