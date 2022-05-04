import QRCode from './mod.ts';

let q1 = new QRCode("I Am QR Code", 128, "FFEF82", "EB5353");
new QRCode("Hello, World!", 256, "2155CD").save("qr/hello");
q1.save("./qr1.png");