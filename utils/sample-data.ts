import { Category, Collectable } from '../interfaces';

export const categories: Category[] = [
  {
    id: 1,
    name: 'computer',
  },
  {
    id: 2,
    name: 'idevice',
  },
];

export const computers: Collectable[] = [
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 1,
    name: 'Macintosh 512Ke',
    boughtAt: 'Jun 12, 2018',
    hardware: 'No info',
    photo: '/images/macintosh-plus.jpg',
    reference: 'http://www.apple-history.com/512ke',
    minimumOs: '',
    currentOs: '',
    maximumOs: '',
    notes:
      'I was the first person to message the previous owner of this Macintosh. After my message, he said he got other 10 ones but he kept the computer for me. Guess I was luck.',
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 2,
    name: 'Power Mac G4 Cube',
    boughtAt: 'Mar 3, 2018',
    hardware: '450 MHz / 768 MB / 20 GB',
    photo: '/images/g4-cube.jpg',
    reference:
      'https://everymac.com/systems/apple/powermac_g4/specs/powermac_g4_450_cube.html',
    minimumOs: '9.1',
    currentOs: '9.2 and 10.4.11',
    maximumOs: '10.4.11',
    notes:
      'The previous owner had a huge collection of Macs and even a Next (someone came first). He had 3 G4 Cubes and this one was the one with most memory. Regarding the name: the Toaster-style CD-ROM was a bad idea. I need to rotate the computer everytime that I need to eject a CD. I needed to buy a Firewire HD and CD to reinstall the Mac OS. Finding a right Mac OS 9 image was challenging.',
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 3,
    name: 'iBook G3',
    boughtAt: 'May 12, 2018',
    hardware: '300 MHz / 288 MB Ram / 20 GB',
    photo: '/images/combo.jpg',
    reference: 'https://everymac.com/systems/apple/ibook/specs/ibook.html',
    minimumOs: '8.6',
    currentOs: '',
    maximumOs: '10.3.9',
    notes:
      "Bought this iBook in a batch with the PowerBook Prismo and iMac G4 for $140. It has dual-boot: Mac OS 9.1 and Mac OS 10.1.3 (supports up to 10.3.9). The battery doesn't hold charge, there is a line in the display and the Apple logo is missing but other than that, everything works. This model has a Airport Card but it only works with WEP networks.",
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 4,
    name: 'iMac G3 Bondi Blue',
    boughtAt: 'Unknown',
    hardware: '350 MHz / 192 MB Ram / 20 GB',
    photo: '/images/not-found.jpeg',
    reference: 'https://everymac.com/systems/apple/imac/specs/imac_350.html',
    minimumOs: '8.6',
    currentOs: '10.3.9',
    maximumOs: '10.3.9',
    notes:
      "This iMac was the first model I ever used. Got from the school I went for R$ 150. It is at my mother's house in Brazil, the speakers don't work.",
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 5,
    name: 'iMac G4',
    boughtAt: 'May 12, 2018',
    hardware: 'No info',
    photo: '/images/combo.jpg',
    reference:
      'https://everymac.com/systems/apple/imac/specs/imac_1.0_17_fp.html',
    minimumOs: '10.2.3',
    currentOs: '10.4.11 and 10.5.8',
    maximumOs: '10.5.8',
    notes:
      'This was the 2nd iMac Flat model. No speakers, keyboard or mouse for this one. I went to Free Geek to get a keyboard and The Hackery for a mouse. coconutID reports this iMac was built somewhere between Sep 15 2003 and Sep 21 2003',
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 6,
    name: 'MacBook',
    boughtAt: 'Unknown',
    hardware: '2 GHz / 2GB / 120 GB',
    photo: '/images/macbook-black.jpg',
    reference:
      'https://everymac.com/systems/apple/macbook/specs/macbook_2.0_black.html',
    minimumOs: '10.4.6',
    currentOs: '10.6.8',
    maximumOs: '10.6.8',
    notes:
      'Apple sold black MacBooks between 2006 and 2008. In 2007 I had a similar MacBook, but white. coconutID reports this iMac was built somewhere between Sep 25 2006 and Oct 01 2006',
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 7,
    name: 'PowerBook G3',
    boughtAt: 'May 12, 2018',
    hardware: '500 MHz / 768 MB / 40 GB',
    photo: '/images/combo.jpg',
    reference:
      'https://everymac.com/systems/apple/powerbook_g3/specs/powerbook_g3_500_fw.html',
    minimumOs: '9.0.2',
    currentOs: '',
    maximumOs: '10.4.11',
    notes:
      "No CD-ROM for this laptop, the right bay is empty. Back in the day you could even add a zip drive in this model. The battery doesn't hold charge. Currently with dual boot: Mac OS 9.2.2 / Mac OS 10.4.11. It has a Airport Card but it only works with WEP networks. It didn't have a charger and I got one for $1 in the VGH Thrift Store on Mar 09 2019",
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 8,
    name: 'MacBook 17',
    boughtAt: 'Jul 7, 2019',
    hardware: '2.4 GHz / 6 GB / 160 GB',
    photo: '/images/macbook-17.jpg',
    reference:
      'https://everymac.com/systems/apple/macbook_pro/specs/macbook-pro-core-2-duo-2.4-17-santa-rosa-specs.html',
    minimumOs: '10.4.9',
    currentOs: '10.7.5',
    maximumOs: '10.11.6',
    notes:
      'The 17" model was not around for a long time and I got this one in a good shape (there is just one small dent). His previous owner gave me an extra 4GB memory and the machine works like a charm. Sometimes I think in installing more RAM and a SSD and see how this computer can perform in these days',
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 9,
    name: 'iMac G3 DV',
    boughtAt: 'Aug 18, 2018',
    hardware: '500 MHz / 640 MB / 30 GB',
    photo: '/images/imac-snow.jpg',
    reference:
      'https://everymac.com/systems/apple/imac/specs/imac_dv_se_500.html',
    minimumOs: '9.0.4',
    currentOs: '?',
    maximumOs: '10.4.11',
    notes:
      'Since 1998 Apple was known for colourful computers but in 2000 they released a Snow computer.',
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 10,
    name: 'MacBook 15',
    boughtAt: 'Aug 19, 2019',
    hardware: 'No info',
    photo: '/images/macbook-15.jpg',
    reference:
      'https://everymac.com/systems/apple/macbook_pro/specs/macbook-pro-core-2-duo-2.4-aluminum-15-late-2008-unibody-specs.html',
    minimumOs: '10.5.5',
    currentOs: '10.11.6',
    maximumOs: '10.11.6',
    notes:
      'Got this one from a co-worker, no hard drive. It is not booting at the moment, I need to figure out why.',
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 11,
    name: 'iBook G4',
    boughtAt: 'Sep 27, 2019',
    hardware: '1.42 GHz / 1 GB / 60 GB',
    photo: '/images/ibook-g4.jpg',
    reference:
      'https://everymac.com/systems/apple/ibook/specs/ibook_g4_1.42_14.html',
    minimumOs: '10.4.2',
    currentOs: '10.5',
    maximumOs: '10.5.8',
    notes: 'Got this one in Richmond from a guy who also collects Macs',
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 12,
    name: 'iBook G3',
    boughtAt: 'Sep 28, 2019',
    hardware: '600 MHz / 640 MB / 20 GB',
    photo: '/images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/ibook/specs/ibook_600_14.html',
    minimumOs: '9.2.1 & and 10.1.2',
    currentOs: '',
    maximumOs: '10.4.11',
    notes:
      'Got this one in Surrey. The previous owner was curious to know what I was going to do with the Mac. He said he got it 4 years ago. This iBook is quite similar to the first Mac I had',
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 13,
    name: 'PowerBook G4 12"',
    boughtAt: 'Sep 29, 2019',
    hardware: '1.5 Ghz / 1.25 GB / 80 GB',
    photo: '/images/powerbook-g4.jpg',
    reference:
      'https://everymac.com/systems/apple/powerbook_g4/specs/powerbook_g4_1.5_12.html',
    minimumOs: '10.3.7',
    currentOs: '10.4.11',
    maximumOs: '10.5.8',
    notes:
      'Despite the small dent in the left bottom part, this computer looks really cool.',
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 14,
    name: 'Power Mac G5',
    boughtAt: 'Sep 28, 2019',
    hardware: '2.3 Ghz / 2 GB / 160 GB',
    photo: '/images/powermac-g5.jpeg',
    reference:
      'https://everymac.com/systems/apple/powermac_g5/specs/powermac_g5_dual_2.3.html',
    minimumOs: '10.4.2',
    currentOs: '10.5.8',
    maximumOs: '10.5.8',
    notes:
      'This Power Mac is the second most powerful G5. The plan for this one is having all possible Mac OS installed. Right now it only has Mac OS 10.5 installed, not sure if it will support 10.3 and older versions',
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 15,
    name: 'Powerbook 145B',
    boughtAt: 'Dec 21, 2019',
    hardware: '25 MHz / 4 MB / 40 MB',
    photo: '/images/powerbook-145b.jpg',
    reference:
      'https://everymac.com/systems/apple/powerbook/specs/mac_powerbook145.html',
    minimumOs: '7.0.1',
    currentOs: '7.1',
    maximumOs: '7.5.5',
    notes:
      'Got this Powerbook with the 1400cs model in North Van from the same guy who sold me the 2nd gen iPod. This Powerbook has a black and white screen and small handles',
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 16,
    name: 'Powerbook 1400cs',
    boughtAt: 'Dec 21, 2019',
    hardware: '32 MB',
    photo: '/images/powerbook-1400cs.jpg',
    reference:
      'https://everymac.com/systems/apple/powerbook/specs/mac_powerbook1400cs_117.html',
    minimumOs: '7.5.3',
    currentOs: '7.5.3',
    maximumOs: '7.6',
    notes:
      'Got this one with the Powerbook 145B. It runs Mac OS 7.5.3 and it has Netscape Communicator 4. Next job here is finding a way to connect it to the Internet',
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 17,
    name: 'MacBook Air',
    boughtAt: 'Mar 17, 2020',
    hardware: '1.6 Ghz / 2 GB / 80 GB',
    photo: '/images/macbook-air.jpg',
    reference:
      'https://everymac.com/systems/apple/macbook-air/specs/macbook-air-core-2-duo-1.6-13-specs.html',
    minimumOs: '10.5.1',
    currentOs: '10.7.5',
    maximumOs: '10.7.5',
    notes:
      'This is the original MacBook Air, the one Steve Job took out of an envelope. The unit I have is not in a very good shape (bad display, bad battery) but it is definitely a piece of history',
  },
  {
    category: {
      id: 1,
      name: 'computer',
    },
    id: 18,
    name: 'Macintosh Classic',
    boughtAt: 'Jul 80, 2020',
    hardware: '',
    photo: '/images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/mac_classic/specs/mac_classic.html',
    minimumOs: '6.0.7',
    currentOs: '',
    maximumOs: '7.5.5',
    notes:
      'This Classic needs some Retrolight but other than that, it looks great, including a bag and a mousepad',
  },
];

export const idevices: Collectable[] = [
  {
    id: 19,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPhone - First Generation',
    boughtAt: 'Jan 14, 2020',
    hardware: '8GB',
    photo: '/images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/iphone/specs/apple-iphone-specs.html',
    notes:
      'The OG iPhone. Got from a guy in Vancouver West side. He mentioned to sell things on Craigslist. Maybe he will have more stuff in the future.',
  },
  {
    id: 20,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPod - First Generation',
    boughtAt: 'Oct 26, 2019',
    hardware: '5GB',
    photo: '/images/ipod-first-gen.jpeg',
    reference: 'https://everymac.com/systems/apple/ipod/specs/ipod.html',
    notes: 'The OG iPod. Firewire only and totally functional.',
  },
  {
    id: 21,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPod - Second Generation',
    boughtAt: 'Dec 9, 2019',
    hardware: '20GB',
    photo: '/images/not-found.jpeg',
    reference: 'https://everymac.com/systems/apple/ipod/specs/ipod_2ndgen.html',
    notes:
      "Got this iPod in North Van. The battery doesn't hold charge but it works fine connected to power",
  },
  {
    id: 22,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPod - Third Generation',
    boughtAt: 'Mar 9, 2019',
    hardware: '15GB',
    photo: '/images/ipod-3rd.jpg',
    reference: 'https://everymac.com/systems/apple/ipod/specs/ipod_5threv.html',
    notes:
      'coconitID reports this device was built between May 17 2004 and May 23 2004. The fun fact of this one is its cable has 2 connections: USB and Firewire',
  },
  {
    id: 23,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPhone 3G',
    boughtAt: 'Aug 6, 2018',
    hardware: '8GB',
    photo: '/images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/iphone/specs/apple-iphone-3g-specs.html',
    notes:
      'The oldest iPhone I could find. It runs iOS 3.1.2, the original owner even jailbreak it. It does support iOS 4.2, but I want to keep this iOS as old as possible',
  },
  {
    id: 24,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPad - First Generation',
    boughtAt: 'Mar 24, 2018',
    hardware: '32GB',
    photo: '/images/ipad.jpg',
    reference:
      'https://everymac.com/systems/apple/ipad/specs/apple-ipad-original-specs.html',
    notes:
      'This iPad is running iOS 5.1.1, was built between Dec 13 2010 and Dec 19 2010. Its battery lasts incredible one month',
  },
  {
    id: 25,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPod Shuffle - 1st generation',
    boughtAt: 'Sep 21, 2006',
    hardware: '512MB',
    photo: '/images/ipod-shuffle.jpg',
    reference: 'http://www.apple-history.com/ipod_shuffle',
    notes:
      "This iPod was the first iPod I could afford. I tried to replace the battery by myself sometime in the past and it doesn't work anymore. Built around Jan 02 2006 - Jan 08 2006 (via coconutID)",
  },
  {
    id: 26,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPod Hi-Fi',
    boughtAt: 'May 20, 2019',
    hardware: '-',
    photo: '/images/not-found.jpeg',
    reference: 'https://en.wikipedia.org/wiki/IPod_Hi-Fi',
    notes:
      'I am always impressed by the quality of iPod Hi-Fi. Currently, it is connected to an Alexa device and used by play songs from Spotify.',
  },
  {
    id: 27,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPod Nano - 1st generation',
    boughtAt: 'Mar 21, 2018',
    hardware: '2GB',
    photo: '/images/ipod-nano.jpg',
    reference: 'http://www.apple-history.com/ipod_nano',
    notes:
      'The first generation of iPod Nanos got a battery recall - I had one replaced. This one I got in its box and it seems fine.',
  },
  {
    id: 28,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPhone 4',
    boughtAt: 'Jan 29, 2019',
    hardware: '8GB',
    photo: '/images/iphone-4.jpg',
    reference: 'http://www.apple-history.com/ipod_touch',
    notes:
      'Bought from a mom selling many iPhone 4 (it seems she has many kids). It is running iOS 7.1.2',
  },
  {
    id: 29,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPhone Touch - 1st generation',
    boughtAt: 'Feb 9, 2019',
    hardware: '16GB',
    photo: '/images/ipod-touch.jpg',
    reference: 'http://www.apple-history.com/ipod_touch',
    notes: 'It runs iOS 2.2.1. There is a name engraved on it, Clair',
  },
  {
    id: 30,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPod Mini - First Generation',
    boughtAt: 'Mar 9, 2019',
    hardware: '4GB',
    photo: '/images/not-found.jpeg',
    reference: 'http://www.apple-history.com/ipod_nano',
    notes:
      'I had another iPod Mini but the guy gave me this one I bought his third gen iPod. The battery is bad',
  },
  {
    id: 31,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPod Mini - Gray',
    boughtAt: 'Unknown',
    hardware: '4GB',
    photo: '/images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/ipod/specs/ipod_mini_2g.html',
    notes: 'To be added',
  },
  {
    id: 32,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPhone 4',
    boughtAt: 'Unknown',
    hardware: '16GB',
    photo: '/images/not-found.jpeg',
    reference: 'http://www.apple-history.com/ipod_touch',
    notes:
      'Got from my GF, it is running iOS 4.3.2. It does support iOS 7.1.2 but I want to keep with an old iOS. The power button is stuck',
  },
  {
    id: 33,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPhone 5S',
    boughtAt: 'Unknown',
    hardware: '16GB',
    photo: '/images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/iphone/specs/apple-iphone-5s-a1533-gsm-north-america-specs.html',
    notes: 'Got from my GF, broken display',
  },
  {
    id: 34,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPhone SE',
    boughtAt: 'Unknown',
    hardware: '32GB',
    photo: '/images/iphone-5s.jpg',
    reference:
      'https://everymac.com/systems/apple/iphone/specs/apple-iphone-se-a1662-united-states-att-tmobile-verizon-specs.html',
    notes: 'Got from my GF, broken display',
  },
  {
    id: 35,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPod Nano - 6th generation',
    boughtAt: 'Unknown',
    hardware: '8GB',
    photo: '/images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/ipod/specs/ipod-6th-generation-6g-multitouch-nano-specs.html',
    notes:
      'Many people used this iPod as a watch since you could find wrist for it (I think it is a bad idea). Because of the watch factor, people use to ask all kind ',
  },
  {
    id: 36,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPod Nano - 7th generation',
    boughtAt: 'Sep 30, 2019',
    hardware: '16GB',
    photo: '/images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/ipod/specs/ipod-nano-7th-generation-7g-2015-specs.html',
    notes:
      'Got this iPod for free due to the iPod Nano first generation recall. The process was relatively simple. Called Apple, they asked me to the send the old one and then they send another one',
  },
  {
    id: 37,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPad - Second Generation',
    boughtAt: 'Oct 2, 2019',
    hardware: '16GB',
    photo: '/images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/ipad/specs/apple-ipad-2-wi-fi-specs.html',
    notes: 'Another item that I got from my GF',
  },
  {
    id: 38,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPod Shuffle - 2nd generation',
    boughtAt: 'Jun 20, 2020',
    hardware: '2GB',
    photo: '/images/ipod-shuffle-2nd-gen.jpg',
    reference:
      'https://everymac.com/systems/apple/ipod/specs/ipod-2nd-generation-shuffle-colors-late-2008-specs.html',
    notes:
      'Good deal from Craigslist, iPod in perfect shape. This is the first clip model that Apple introduced to market',
  },
  {
    id: 39,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPhone 4 white',
    boughtAt: 'Jul 7, 2020',
    hardware: '8GB',
    photo: '/images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/iphone/specs/apple-iphone-4-specs.html',
    notes: 'test',
  },
  {
    id: 40,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPod nano - 3rd generation',
    boughtAt: 'Jul 10, 2020',
    hardware: '8GB',
    photo: '/images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/ipod/specs/ipod-3rd-generation-fat-nano-specs.html',
    notes: 'test',
  },
  {
    id: 41,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPod Shuffle - 3rd generation',
    boughtAt: 'Jul 10, 2020',
    hardware: '4GB',
    photo: '/images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/ipod/specs/ipod-3rd-generation-shuffle-3g-colors-late-2009-specs.html',
    notes: 'test',
  },
  {
    id: 42,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPod nano - 4th generation',
    boughtAt: 'Jul 12, 2020',
    hardware: '8GB',
    photo: '/images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/ipod/specs/ipod-4th-generation-4g-nano-specs.html',
    notes: 'test',
  },
  {
    id: 43,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPhone 5C',
    boughtAt: 'Dec 31, 2020',
    hardware: '8GB',
    photo: '/images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/iphone/specs/apple-iphone-5c-a1532-gsm-north-america-specs.html',
    notes: 'test',
  },
  {
    id: 44,
    category: {
      id: 2,
      name: 'idevice',
    },
    name: 'iPhone 6',
    boughtAt: 'Dec 31, 2020',
    hardware: '16GB',
    photo: '/images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/iphone/specs/apple-iphone-6-a1549-4.7-inch-gsm-north-america-specs.html',
    notes: 'test',
  },
];

export const collectables = [...computers, ...idevices];
