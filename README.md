# ionic-prepopulate-sqlite
ionic prepopulate sqlite data

Contoh aplikasi ionic framework untuk menampilkan data default dari sqlite.

Referensi : https://www.thepolyglotdeveloper.com/2015/01/deploy-ionic-framework-app-pre-filled-sqlite-db/

Contoh project ini menggunakan package https://github.com/an-rahulpandey/cordova-plugin-dbcopy untuk mengcopy database sqlite anda ke dalam device agar bisa digunakan. Kadang, kita membuat file database baru dengan nama yang sama tetapi tidak dioverride oleh android dan itu akan memunculkan macam-macam error. Jika terjadi seperti itu, solusinya adalah masuk ke menu setting device/emulator anda, kemudian masuk ke sub menu aplikasi, kemudian pilih aplikasi, kemudian hapus data dan cache nya agar aplikasi menjadi seperti baru pertama kali install.


Untuk menjalan contoh aplikasi ini, silahkan clone ke local directory anda. Kemudian masuk ke directory project dan jalankan perintah

1. ionic state restore
2. cordova plugin add https://github.com/brodysoft/Cordova-SQLitePlugin.git
3. cordova plugin add https://github.com/an-rahulpandey/cordova-plugin-dbcopy.git
