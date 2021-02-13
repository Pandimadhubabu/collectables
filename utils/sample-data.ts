import { Collectable } from '../interfaces';

/** Dummy user data. */
/* eslint-disable-next-line import/prefer-default-export */

export const computers: Collectable[] = [
  {
    id: 1,
    name: 'Macintosh 512Ke',
    serial: '',
    price: 120,
    boughtAt: 'Jun 12, 2018',
    hardware: 'No info',
    photo: 'images/macintosh-plus.jpg',
    reference: 'http://www.apple-history.com/512ke',
    minimumOs: '',
    currentOs: '',
    maximumOs: '',
    notes:
      'I was the first person to message the previous owner of this Macintosh. After my message, he said he got other 10 ones but he kept the computer for me. Guess I was luck.',
  },
  {
    id: 2,
    name: 'Power Mac G4 Cube',
    serial: 'XA0342F3K59',
    price: 220,
    boughtAt: 'Mar 3, 2018',
    hardware: '450 MHz / 768 MB / 20 GB',
    photo: 'images/g4-cube.jpg',
    reference:
      'https://everymac.com/systems/apple/powermac_g4/specs/powermac_g4_450_cube.html',
    minimumOs: '9.1',
    currentOs: '9.2 and 10.4.11',
    maximumOs: '10.4.11',
    notes:
      'The previous owner had a huge collection of Macs and even a Next (someone came first). He had 3 G4 Cubes and this one was the one with most memory. Regarding the name: the Toaster-style CD-ROM was a bad idea. I need to rotate the computer everytime that I need to eject a CD. I needed to buy a Firewire HD and CD to reinstall the Mac OS. Finding a right Mac OS 9 image was challenging.',
  },
  {
    id: 3,
    name: 'iBook G3',
    serial: 'UV947B3FH5Q',
    price: 46,
    boughtAt: 'May 12, 2018',
    hardware: '300 MHz / 288 MB Ram / 20 GB',
    photo: 'images/combo.jpg',
    reference: 'https://everymac.com/systems/apple/ibook/specs/ibook.html',
    minimumOs: '8.6',
    currentOs: '',
    maximumOs: '10.3.9',
    notes:
      "Bought this iBook in a batch with the PowerBook Prismo and iMac G4 for $140. It has dual-boot: Mac OS 9.1 and Mac OS 10.1.3 (supports up to 10.3.9). The battery doesn't hold charge, there is a line in the display and the Apple logo is missing but other than that, everything works. This model has a Airport Card but it only works with WEP networks.",
  },
  {
    id: 4,
    name: 'iMac G3 Bondi Blue',
    serial: 'XA02108VJUY',
    price: 50,
    boughtAt: 'Unknown',
    hardware: '350 MHz / 192 MB Ram / 20 GB',
    photo: 'images/not-found.jpeg',
    reference: 'https://everymac.com/systems/apple/imac/specs/imac_350.html',
    minimumOs: '8.6',
    currentOs: '10.3.9',
    maximumOs: '10.3.9',
    notes:
      "This iMac was the first model I ever used. Got from the school I went for R$ 150. It is at my mother's house in Brazil, the speakers don't work.",
  },
  {
    id: 5,
    name: 'iMac G4',
    serial: 'QP3370WKPVK',
    price: 46,
    boughtAt: 'May 12, 2018',
    hardware: 'No info',
    photo: 'images/combo.jpg',
    reference:
      'https://everymac.com/systems/apple/imac/specs/imac_1.0_17_fp.html',
    minimumOs: '10.2.3',
    currentOs: '10.4.11 and 10.5.8',
    maximumOs: '10.5.8',
    notes:
      'This was the 2nd iMac Flat model. No speakers, keyboard or mouse for this one. I went to Free Geek to get a keyboard and The Hackery for a mouse. coconutID reports this iMac was built somewhere between Sep 15 2003 and Sep 21 2003',
  },
  {
    id: 6,
    name: 'MacBook',
    serial: '4H6393BJWMN',
    price: 50,
    boughtAt: 'Unknown',
    hardware: '2 GHz / 2GB / 120 GB',
    photo: 'images/macbook-black.jpg',
    reference:
      'https://everymac.com/systems/apple/macbook/specs/macbook_2.0_black.html',
    minimumOs: '10.4.6',
    currentOs: '10.6.8',
    maximumOs: '10.6.8',
    notes:
      'Apple sold black MacBooks between 2006 and 2008. In 2007 I had a similar MacBook, but white. coconutID reports this iMac was built somewhere between Sep 25 2006 and Oct 01 2006',
  },
  {
    id: 7,
    name: 'PowerBook G3',
    serial: 'QT0110JSHKE',
    price: 46,
    boughtAt: 'May 12, 2018',
    hardware: '500 MHz / 768 MB / 40 GB',
    photo: 'images/combo.jpg',
    reference:
      'https://everymac.com/systems/apple/powerbook_g3/specs/powerbook_g3_500_fw.html',
    minimumOs: '9.0.2',
    currentOs: '',
    maximumOs: '10.4.11',
    notes:
      "No CD-ROM for this laptop, the right bay is empty. Back in the day you could even add a zip drive in this model. The battery doesn't hold charge. Currently with dual boot: Mac OS 9.2.2 / Mac OS 10.4.11. It has a Airport Card but it only works with WEP networks. It didn't have a charger and I got one for $1 in the VGH Thrift Store on Mar 09 2019",
  },
  {
    id: 8,
    name: 'MacBook 17',
    serial: 'W8741088YAP',
    price: 100,
    boughtAt: 'Jul 7, 2019',
    hardware: '2.4 GHz / 6 GB / 160 GB',
    photo: 'images/macbook-17.jpg',
    reference:
      'https://everymac.com/systems/apple/macbook_pro/specs/macbook-pro-core-2-duo-2.4-17-santa-rosa-specs.html',
    minimumOs: '10.4.9',
    currentOs: '10.7.5',
    maximumOs: '10.11.6',
    notes:
      'The 17" model was not around for a long time and I got this one in a good shape (there is just one small dent). His previous owner gave me an extra 4GB memory and the machine works like a charm. Sometimes I think in installing more RAM and a SSD and see how this computer can perform in these days',
  },
  {
    id: 9,
    name: 'iMac G3 DV',
    serial: 'RN030162JVA',
    price: 60,
    boughtAt: 'Aug 18, 2018',
    hardware: '500 MHz / 640 MB / 30 GB',
    photo: 'images/imac-snow.jpg',
    reference:
      'https://everymac.com/systems/apple/imac/specs/imac_dv_se_500.html',
    minimumOs: '9.0.4',
    currentOs: '?',
    maximumOs: '10.4.11',
    notes:
      'Since 1998 Apple was known for colourful computers but in 2000 they released a Snow computer.',
  },
  {
    id: 10,
    name: 'MacBook 15',
    serial: '',
    price: 0,
    boughtAt: 'Aug 19, 2019',
    hardware: 'No info',
    photo: 'images/macbook-15.jpg',
    reference:
      'https://everymac.com/systems/apple/macbook_pro/specs/macbook-pro-core-2-duo-2.4-aluminum-15-late-2008-unibody-specs.html',
    minimumOs: '10.5.5',
    currentOs: '10.11.6',
    maximumOs: '10.11.6',
    notes:
      'Got this one from a co-worker, no hard drive. It is not booting at the moment, I need to figure out why.',
  },
  {
    id: 11,
    name: 'iBook G4',
    serial: '4H6122MMSE9',
    price: 20,
    boughtAt: 'Sep 27, 2019',
    hardware: '1.42 GHz / 1 GB / 60 GB',
    photo: 'images/ibook-g4.jpg',
    reference:
      'https://everymac.com/systems/apple/ibook/specs/ibook_g4_1.42_14.html',
    minimumOs: '10.4.2',
    currentOs: '10.5',
    maximumOs: '10.5.8',
    notes: 'Got this one in Richmond from a guy who also collects Macs',
  },
  {
    id: 12,
    name: 'iBook G3',
    serial: 'UV2031YALLN',
    price: 60,
    boughtAt: 'Sep 28, 2019',
    hardware: '600 MHz / 640 MB / 20 GB',
    photo: 'images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/ibook/specs/ibook_600_14.html',
    minimumOs: '9.2.1 & and 10.1.2',
    currentOs: '',
    maximumOs: '10.4.11',
    notes:
      'Got this one in Surrey. The previous owner was curious to know what I was going to do with the Mac. He said he got it 4 years ago. This iBook is quite similar to the first Mac I had',
  },
  {
    id: 13,
    name: 'PowerBook G4 12"',
    serial: '4H60138GRJ7',
    price: 40,
    boughtAt: 'Sep 29, 2019',
    hardware: '1.5 Ghz / 1.25 GB / 80 GB',
    photo: 'images/powerbook-g4.jpg',
    reference:
      'https://everymac.com/systems/apple/powerbook_g4/specs/powerbook_g4_1.5_12.html',
    minimumOs: '10.3.7',
    currentOs: '10.4.11',
    maximumOs: '10.5.8',
    notes:
      'Despite the small dent in the left bottom part, this computer looks really cool.',
  },
  {
    id: 14,
    name: 'Power Mac G5',
    serial: '',
    price: 140,
    boughtAt: 'Sep 28, 2019',
    hardware: '2.3 Ghz / 2 GB / 160 GB',
    photo: 'images/powermac-g5.jpeg',
    reference:
      'https://everymac.com/systems/apple/powermac_g5/specs/powermac_g5_dual_2.3.html',
    minimumOs: '10.4.2',
    currentOs: '10.5.8',
    maximumOs: '10.5.8',
    notes:
      'This Power Mac is the second most powerful G5. The plan for this one is having all possible Mac OS installed. Right now it only has Mac OS 10.5 installed, not sure if it will support 10.3 and older versions',
  },
  {
    id: 15,
    name: 'Powerbook 145B',
    serial: '',
    price: 5,
    boughtAt: 'Dec 21, 2019',
    hardware: '25 MHz / 4 MB / 40 MB',
    photo: 'images/powerbook-145b.jpg',
    reference:
      'https://everymac.com/systems/apple/powerbook/specs/mac_powerbook145.html',
    minimumOs: '7.0.1',
    currentOs: '7.1',
    maximumOs: '7.5.5',
    notes:
      'Got this Powerbook with the 1400cs model in North Van from the same guy who sold me the 2nd gen iPod. This Powerbook has a black and white screen and small handles',
  },
  {
    id: 16,
    name: 'Powerbook 1400cs',
    serial: '',
    price: 5,
    boughtAt: 'Dec 21, 2019',
    hardware: '32 MB',
    photo: 'images/powerbook-1400cs.jpg',
    reference:
      'https://everymac.com/systems/apple/powerbook/specs/mac_powerbook1400cs_117.html',
    minimumOs: '7.5.3',
    currentOs: '7.5.3',
    maximumOs: '7.6',
    notes:
      'Got this one with the Powerbook 145B. It runs Mac OS 7.5.3 and it has Netscape Communicator 4. Next job here is finding a way to connect it to the Internet',
  },
  {
    id: 17,
    name: 'MacBook Air',
    serial: 'W88283Z6Y51',
    price: 90,
    boughtAt: 'Mar 17, 2020',
    hardware: '1.6 Ghz / 2 GB / 80 GB',
    photo: 'images/macbook-air.jpg',
    reference:
      'https://everymac.com/systems/apple/macbook-air/specs/macbook-air-core-2-duo-1.6-13-specs.html',
    minimumOs: '10.5.1',
    currentOs: '10.7.5',
    maximumOs: '10.7.5',
    notes:
      'This is the original MacBook Air, the one Steve Job took out of an envelope. The unit I have is not in a very good shape (bad display, bad battery) but it is definitely a piece of history',
  },
  {
    id: 18,
    name: 'Macintosh Classic',
    serial: '',
    price: 300,
    boughtAt: 'Jul 80, 2020',
    hardware: '',
    photo: 'images/not-found.jpeg',
    reference:
      'https://everymac.com/systems/apple/mac_classic/specs/mac_classic.html',
    minimumOs: '6.0.7',
    currentOs: '',
    maximumOs: '7.5.5',
    notes:
      'This Classic needs some Retrolight but other than that, it looks great, including a bag and a mousepad',
  },
];

export const collectables = [...computers];
