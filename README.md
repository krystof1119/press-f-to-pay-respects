# press-f-to-pay-respects<br>
Press F for the time spent on this app.<br>
FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF (No, intelliJ, this is not a typo.)

My first ever Electron app. Big F.


**What it does**<br>
It presses F. That's its purpose. You set the F quantity and quality and it presses F. That's literally it.

**Collection**<br>
Just clone the repo, actually.

**Preparation for building**<br>
Install dependencies for getting `robotjs`. For me, it meant installing `windows-build-tools` and `node-gyp` globally. Following instructions on https://github.com/octalmage/robotjs#building<br>
Run `yarn` or an npm equivalent (but there is only a yarn lockfile).<br>
_This used to require Java. It **no longer does.**_

**Running the code**<br>
Use `yarn start` or `electron-forge start`. The first one just uses the second one.

**Building**<br>
You must be on the platform you wish to build for. Then execute `electron-forge make --arch=INSERT_YOUR_ARCHITECTURE_HERE`, where the arch may be ia32 or x64.
Electron-forge provides support for ARM, but I won't help you with it.<br>
 
