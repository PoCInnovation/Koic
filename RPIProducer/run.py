#!/usr/bin/env python3

import asyncio
from manager import Manager

async def main():
    manager = Manager()
    try:
        await manager.start_capture()
    except:
        print("[+] An error has been caught")
    finally:
        manager.close()
    print("[+] Exiting")

if __name__ == "__main__":
    asyncio.run(main())