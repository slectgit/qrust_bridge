# qrust Bridge
### qrust bindings in Deno 🦕🦕🦕.

## Getting started
```typescript
import QRCode from "https://deno.land/x/qrust_bridge@v1.0/mod.ts";
let qrcode = new QRCode("https://github.com/slectgit/qrust_bridge", 256, "ff0052", "ffffff");
qrcode.save("qrcode/qrcode.png");
```
<img src="https://raw.githubusercontent.com/slectgit/qrust_bridge/master/qrcode/qrcode.png" />

## Requirement
### <a href="https://github.com/slectgit/qrust">qrust</a> - QR Code Generate

## License
### <a href="https://github.com/slectgit/qrust_bridge/blob/master/LICENSE">MIT</a>