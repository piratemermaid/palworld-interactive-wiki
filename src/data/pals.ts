import { map } from 'lodash';

export const PAL_DATA: PalData = {
  Lamball: {
    paldeckNo: '001',
    elements: ['normal'],
    drops: [],
  },
  Cattiva: {
    paldeckNo: '002',
    elements: ['normal'],
    drops: [],
  },
  Chikipi: {
    paldeckNo: '003',
    elements: ['normal'],
    drops: [],
  },
  Lifmunk: {
    paldeckNo: '004',
    elements: ['grass'],
    drops: [],
  },
  Foxparks: {
    paldeckNo: '005',
    elements: ['fire'],
    drops: [],
  },
  'Foxparks Cryst': {
    paldeckNo: '005b',
    elements: ['ice'],
    drops: [],
  },
  Fuack: {
    paldeckNo: '006',
    elements: ['water'],
    drops: [],
  },
  Sparkit: {
    paldeckNo: '007',
    elements: ['electric'],
    drops: [],
  },
  Tanzee: {
    paldeckNo: '008',
    elements: ['grass'],
    drops: [],
  },
  Rooby: {
    paldeckNo: '009',
    elements: ['fire'],
    drops: [],
  },
  Pengullet: {
    paldeckNo: '010',
    elements: ['water', 'ice'],
    drops: [],
  },
  'Pengullet Lux': {
    paldeckNo: '010b',
    elements: ['water', 'electric'],
    drops: [],
  },
  Penking: {
    paldeckNo: '011',
    elements: ['water', 'ice'],
    drops: [],
  },
  'Penking Lux': {
    paldeckNo: '011b',
    elements: ['water', 'electric'],
    drops: [],
  },
  Jolthog: {
    paldeckNo: '012',
    elements: ['electric'],
    drops: [],
  },
  'Jolthog Cryst': {
    paldeckNo: '012b',
    elements: ['ice'],
    drops: [],
  },
  Gumoss: {
    paldeckNo: '013',
    elements: ['grass', 'ground'],
    drops: [],
  },
  Vixy: {
    paldeckNo: '014',
    elements: ['normal'],
    drops: [],
  },
  Hoocrates: {
    paldeckNo: '015',
    elements: ['dark'],
    drops: [],
  },
  Teafant: {
    paldeckNo: '016',
    elements: ['water'],
    drops: [],
  },
  Depresso: {
    paldeckNo: '017',
    elements: ['dark'],
    drops: [],
  },
  Cremis: {
    paldeckNo: '018',
    elements: ['normal'],
    drops: [],
  },
  Daedream: {
    paldeckNo: '019',
    elements: ['dark'],
    drops: [],
  },
  Rushoar: {
    paldeckNo: '020',
    elements: ['ground'],
    drops: [],
  },
  Nox: {
    paldeckNo: '021',
    elements: ['dark'],
    drops: [],
  },
  Fuddler: {
    paldeckNo: '022',
    elements: ['ground'],
    drops: [],
  },
  Killamari: {
    paldeckNo: '023',
    elements: ['dark', 'water'],
    drops: [],
  },
  'Killamari Primo': {
    paldeckNo: '023b',
    elements: ['dark', 'water'],
    drops: [],
  },
  Mau: {
    paldeckNo: '024',
    elements: ['dark'],
    drops: [],
  },
  'Mau Cryst': {
    paldeckNo: '024b',
    elements: ['ice'],
    drops: [],
  },
  Celaray: {
    paldeckNo: '025',
    elements: ['water'],
    drops: [],
  },
  'Celaray Lux': {
    paldeckNo: '025b',
    elements: ['water', 'electric'],
    drops: [],
  },
  Direhowl: {
    paldeckNo: '026',
    elements: ['normal'],
    drops: [],
  },
  Tocotoco: {
    paldeckNo: '027',
    elements: ['normal'],
    drops: [],
  },
  Flopie: {
    paldeckNo: '028',
    elements: ['grass'],
    drops: [],
  },
  Mozzarina: {
    paldeckNo: '029',
    elements: ['normal'],
    drops: [],
  },
  Bristla: {
    paldeckNo: '030',
    elements: ['grass'],
    drops: [],
  },
  Gobfin: {
    paldeckNo: '031',
    elements: ['water'],
    drops: [],
  },
  'Gobfin Ignis': {
    paldeckNo: '031b',
    elements: ['fire'],
    drops: [],
  },
  Hangyu: {
    paldeckNo: '032',
    elements: ['ground'],
    drops: [],
  },
  'Hangyu Cryst': {
    paldeckNo: '032b',
    elements: ['ice'],
    drops: [],
  },
  Mossanda: {
    paldeckNo: '033',
    elements: ['grass'],
    drops: [],
  },
  'Mossanda Lux': {
    paldeckNo: '033b',
    elements: ['electric'],
    drops: [],
  },
  Woolipop: {
    paldeckNo: '034',
    elements: ['normal'],
    drops: [],
  },
  Caprity: {
    paldeckNo: '035',
    elements: ['grass'],
    drops: [],
  },
  Melpaca: {
    paldeckNo: '036',
    elements: ['normal'],
    drops: [],
  },
  Eikthyrdeer: {
    paldeckNo: '037',
    elements: ['normal'],
    drops: [],
  },
  'Eikthyrdeer Terra': {
    paldeckNo: '037b',
    elements: ['ground'],
    drops: [],
  },
  Nitewing: {
    paldeckNo: '038',
    elements: ['normal'],
    drops: [],
  },
  Ribbuny: {
    paldeckNo: '039',
    elements: ['normal'],
    drops: [],
  },
  'Ribbuny Botan': {
    paldeckNo: '039b',
    elements: ['grass'],
    drops: [],
  },
  Incineram: {
    paldeckNo: '040',
    elements: ['fire', 'dark'],
    drops: [],
  },
  'Inceneram Noct': {
    paldeckNo: '040b',
    elements: ['dark'],
    drops: [],
  },
  Cinnamoth: {
    paldeckNo: '041',
    elements: ['grass'],
    drops: [],
  },
  Arsox: {
    paldeckNo: '042',
    elements: ['fire'],
    drops: [],
  },
  Dumud: {
    paldeckNo: '043',
    elements: ['ground', 'water'],
    drops: [],
  },
  Cawgnito: {
    paldeckNo: '044',
    elements: ['dark'],
    drops: [],
  },
  Leezpunk: {
    paldeckNo: '045',
    elements: ['dark'],
    drops: [],
  },
  'Leezpunk Ignis': {
    paldeckNo: '045b',
    elements: ['fire'],
    drops: [],
  },
  Loupmoon: {
    paldeckNo: '046',
    elements: ['dark'],
    drops: [],
  },
  'Loupmoon Cryst': {
    paldeckNo: '046b',
    elements: ['ice'],
    drops: [],
  },
  Galeclaw: {
    paldeckNo: '047',
    elements: ['normal'],
    drops: [],
  },
  Robinquill: {
    paldeckNo: '048',
    elements: ['grass'],
    drops: [],
  },
  'Robinquill Terra': {
    paldeckNo: '048b',
    elements: ['grass', 'ground'],
    drops: [],
  },
  Gorirat: {
    paldeckNo: '049',
    elements: ['normal'],
    drops: [],
  },
  'Gorirat Terra': {
    paldeckNo: '049b',
    elements: ['ground'],
    drops: [],
  },
  Beegarde: {
    paldeckNo: '050',
    elements: ['grass'],
    drops: [],
  },
  Elizabee: {
    paldeckNo: '051',
    elements: ['grass'],
    drops: [],
  },
  Grintale: {
    paldeckNo: '052',
    elements: ['normal'],
    drops: [],
  },
  Swee: {
    paldeckNo: '053',
    elements: ['ice'],
    drops: [],
  },
  Sweepa: {
    paldeckNo: '054',
    elements: ['ice'],
    drops: [],
  },
  Chillet: {
    paldeckNo: '055',
    elements: ['ice', 'dragon'],
    drops: [],
  },
  Univolt: {
    paldeckNo: '056',
    elements: ['electric'],
    drops: [],
  },
  Foxcicle: {
    paldeckNo: '057',
    elements: ['ice'],
    drops: [],
  },
  Pyrin: {
    paldeckNo: '058',
    elements: ['fire'],
    drops: [],
  },
  'Pyrin Noct': {
    paldeckNo: '058b',
    elements: ['fire', 'dark'],
    drops: [],
  },
  Reindrix: {
    paldeckNo: '059',
    elements: ['ice'],
    drops: [],
  },
  Rayhound: {
    paldeckNo: '060',
    elements: ['electric'],
    drops: [],
  },
  Kitsun: {
    paldeckNo: '061',
    elements: ['fire'],
    drops: [],
  },
  Dazzi: {
    paldeckNo: '062',
    elements: ['electric'],
    drops: [],
  },
  'Dazzi Noct': {
    paldeckNo: '062b',
    elements: ['dark', 'electric'],
    drops: [],
  },
  Lunaris: {
    paldeckNo: '063',
    elements: ['normal'],
    drops: [],
  },
  Dinossom: {
    paldeckNo: '064',
    elements: ['grass', 'dragon'],
    drops: [],
  },
  'Dinossom Lux': {
    paldeckNo: '064b',
    elements: ['electric', 'dragon'],
    drops: [],
  },
  Surfent: {
    paldeckNo: '065',
    elements: ['water'],
    drops: [],
  },
  'Surfent Terra': {
    paldeckNo: '065b',
    elements: ['ground'],
    drops: [],
  },
  Maraith: {
    paldeckNo: '066',
    elements: ['dark'],
    drops: [],
  },
  Digtoise: {
    paldeckNo: '067',
    elements: ['ground'],
    drops: [],
  },
  Tombat: {
    paldeckNo: '068',
    elements: ['dark'],
    drops: [],
  },
  Lovander: {
    paldeckNo: '069',
    elements: ['normal'],
    drops: [],
  },
  Flambelle: {
    paldeckNo: '070',
    elements: ['fire'],
    drops: [],
  },
  Vanwyrm: {
    paldeckNo: '071',
    elements: ['fire', 'dark'],
    drops: [],
  },
  'Vanwyrm Cryst': {
    paldeckNo: '071b',
    elements: ['ice', 'dark'],
    drops: [],
  },
  Bushi: {
    paldeckNo: '072',
    elements: ['fire'],
    drops: [],
  },
  'Bushi Noct': {
    paldeckNo: '072b',
    elements: ['fire', 'dark'],
    drops: [],
  },
  Beakon: {
    paldeckNo: '073',
    elements: ['electric'],
    drops: [],
  },
  Ragnahawk: {
    paldeckNo: '074',
    elements: ['fire'],
    drops: [],
  },
  Katress: {
    paldeckNo: '075',
    elements: ['dark'],
    drops: [],
  },
  Wixen: {
    paldeckNo: '076',
    elements: ['fire'],
    drops: [],
  },
  'Wixen Noct': {
    paldeckNo: '076b',
    elements: ['fire', 'dark'],
    drops: [],
  },
  Verdash: {
    paldeckNo: '077',
    elements: ['grass'],
    drops: [],
  },
  Vaelet: {
    paldeckNo: '078',
    elements: ['grass'],
    drops: [],
  },
  Sibelyx: {
    paldeckNo: '079',
    elements: ['ice'],
    drops: [],
  },
  Elphidran: {
    paldeckNo: '080',
    elements: ['dragon'],
    drops: [],
  },
  'Elphidran Aqua': {
    paldeckNo: '080b',
    elements: ['dragon', 'water'],
    drops: [],
  },
  Kelpsea: {
    paldeckNo: '081',
    elements: ['water'],
    drops: [],
  },
  'Kelpsea Ignis': {
    paldeckNo: '081b',
    elements: ['fire'],
    drops: [],
  },
  Azurobe: {
    paldeckNo: '082',
    elements: ['water', 'dragon'],
    drops: [],
  },
  Cryolinx: {
    paldeckNo: '083',
    elements: ['ice'],
    drops: [],
  },
  'Cryolinx Terra': {
    paldeckNo: '083b',
    elements: ['ground'],
    drops: [],
  },
  Blazehowl: {
    paldeckNo: '084',
    elements: ['fire'],
    drops: [],
  },
  'Blazehowl Noct': {
    paldeckNo: '084b',
    elements: ['fire', 'dark'],
    drops: [],
  },
  Relaxaurus: {
    paldeckNo: '085',
    elements: ['dragon', 'water'],
    drops: [],
  },
  'Relaxaurus Lux': {
    paldeckNo: '085b',
    elements: ['dragon', 'electric'],
    drops: [],
  },
  Broncherry: {
    paldeckNo: '086',
    elements: ['grass'],
    drops: [],
  },
  'Broncherry Aqua': {
    paldeckNo: '086b',
    elements: ['grass', 'water'],
    drops: [],
  },
  Petallia: {
    paldeckNo: '087',
    elements: ['grass'],
    drops: [],
  },
  Reptyro: {
    paldeckNo: '088',
    elements: ['fire', 'ground'],
    drops: [],
  },
  'Ice Reptyro': {
    paldeckNo: '088b',
    elements: ['ice', 'ground'],
    drops: [],
  },
  Kingpaca: {
    paldeckNo: '089',
    elements: ['normal'],
    drops: [],
  },
  'Kingpaca Cryst': {
    paldeckNo: '089b',
    elements: ['ice'],
    drops: [],
  },
  Mammorest: {
    paldeckNo: '090',
    elements: ['grass', 'ground'],
    drops: [],
  },
  'Mammorest Cryst': {
    paldeckNo: '090b',
    elements: ['ice', 'ground'],
    drops: [],
  },
  Wumpo: {
    paldeckNo: '091',
    elements: ['ice'],
    drops: [],
  },
  'Wumpo Botan': {
    paldeckNo: '091b',
    elements: ['grass'],
    drops: [],
  },
  Warsect: {
    paldeckNo: '092',
    elements: ['ground', 'grass'],
    drops: [],
  },
  Fenglope: {
    paldeckNo: '093',
    elements: ['normal'],
    drops: [],
  },
  'Fenglope Lux': {
    paldeckNo: '093b',
    elements: ['electric'],
    drops: [],
  },
  Felbat: {
    paldeckNo: '094',
    elements: ['dark'],
    drops: [],
  },
  Quivern: {
    paldeckNo: '095',
    elements: ['dragon'],
    drops: [],
  },
  Blazamut: {
    paldeckNo: '096',
    elements: ['fire'],
    drops: [],
  },
  'Blazamut Ryu': {
    paldeckNo: '096b',
    elements: ['dragon', 'fire'],
    drops: [],
  },
  Helzephyr: {
    paldeckNo: '097',
    elements: ['dark'],
    drops: [],
  },
  Astegon: {
    paldeckNo: '098',
    elements: ['dragon', 'dark'],
    drops: [],
  },
  Menasting: {
    paldeckNo: '099',
    elements: ['dark', 'ground'],
    drops: [],
  },
  'Menasting Terra': {
    paldeckNo: '099b',
    elements: ['ground'],
    drops: [],
  },
  Anubis: {
    paldeckNo: '100',
    elements: ['ground'],
    drops: [],
  },
  Jormuntide: {
    paldeckNo: '101',
    elements: ['dragon', 'water'],
    drops: [],
  },
  'Jormuntide Ignis': {
    paldeckNo: '101b',
    elements: ['dragon', 'fire'],
    drops: [],
  },
  Suzaku: {
    paldeckNo: '102',
    elements: ['fire'],
    drops: [],
  },
  'Suzaku Aqua': {
    paldeckNo: '102b',
    elements: ['water'],
    drops: [],
  },
  Grizzbolt: {
    paldeckNo: '103',
    elements: ['electric'],
    drops: [],
  },
  Lyleen: {
    paldeckNo: '104',
    elements: ['grass'],
    drops: [],
  },
  'Lyleen Noct': {
    paldeckNo: '104b',
    elements: ['dark'],
    drops: [],
  },
  Faleris: {
    paldeckNo: '105',
    elements: ['fire'],
    drops: [],
  },
  Orserk: {
    paldeckNo: '106',
    elements: ['dragon', 'electric'],
    drops: [],
  },
  Shadowbeak: {
    paldeckNo: '107',
    elements: ['dark'],
    drops: [],
  },
  Paladius: {
    paldeckNo: '108',
    elements: ['normal'],
    drops: [],
  },
  Necromus: {
    paldeckNo: '109',
    elements: ['dark'],
    drops: [],
  },
  Frostallion: {
    paldeckNo: '110',
    elements: ['ice'],
    drops: [],
  },
  'Frostallion Noct': {
    paldeckNo: '110b',
    elements: ['dark'],
    drops: [],
  },
  Jetragon: {
    paldeckNo: '111',
    elements: ['dragon'],
    drops: [],
  },
  Bellanoir: {
    paldeckNo: '112',
    elements: ['dark'],
    drops: [],
  },
  'Bellanoir Libero': {
    paldeckNo: '112b',
    elements: ['dark'],
    drops: [],
  },
  Selyne: {
    paldeckNo: '113',
    elements: ['dark', 'normal'],
    drops: [],
  },
  Croajiro: {
    paldeckNo: '114',
    elements: ['water'],
    drops: [],
  },
  'Croajiro Noct': {
    paldeckNo: '114b',
    elements: ['water', 'dark'],
    drops: [],
  },
  Lullu: {
    paldeckNo: '115',
    elements: ['grass'],
    drops: [],
  },
  Shroomer: {
    paldeckNo: '116',
    elements: ['grass'],
    drops: [],
  },
  'Shroomer Noct': {
    paldeckNo: '116b',
    elements: ['grass', 'dark'],
    drops: [],
  },
  Kikit: {
    paldeckNo: '117',
    elements: ['ground'],
    drops: [],
  },
  Sootseer: {
    paldeckNo: '118',
    elements: ['dark', 'fire'],
    drops: [],
  },
  Prixter: {
    paldeckNo: '119',
    elements: ['dark', 'ground'],
    drops: [],
  },
  Knocklem: {
    paldeckNo: '120',
    elements: ['ground'],
    drops: [],
  },
  Yakumo: {
    paldeckNo: '121',
    elements: ['normal'],
    drops: [],
  },
  Dogen: {
    paldeckNo: '122',
    elements: ['normal'],
    drops: [],
  },
  Dazemu: {
    paldeckNo: '123',
    elements: ['ground'],
    drops: [],
  },
  Mimog: {
    paldeckNo: '124',
    elements: ['normal'],
    drops: [],
  },
  Xenovader: {
    paldeckNo: '125',
    elements: ['dark'],
    drops: [],
  },
  Xenogard: {
    paldeckNo: '126',
    elements: ['dragon'],
    drops: [],
  },
  Xenolord: {
    paldeckNo: '127',
    elements: ['dark', 'dragon'],
    drops: [],
  },
  Nitemary: {
    paldeckNo: '128',
    elements: ['dark'],
    drops: [],
  },
  Starryon: {
    paldeckNo: '129',
    elements: ['dark'],
    drops: [],
  },
  Silvegis: {
    paldeckNo: '130',
    elements: ['dragon'],
    drops: [],
  },
  Smokie: {
    paldeckNo: '131',
    elements: ['dark'],
    drops: [],
  },
  Celesdir: {
    paldeckNo: '132',
    elements: ['normal'],
    drops: [],
  },
  Omascul: {
    paldeckNo: '133',
    elements: ['dark'],
    drops: [],
  },
  Splatterina: {
    paldeckNo: '134',
    elements: ['dark'],
    drops: [],
  },
  Tarantriss: {
    paldeckNo: '135',
    elements: ['dark'],
    drops: [],
  },
  Azurmane: {
    paldeckNo: '136',
    elements: ['electric'],
    drops: [],
  },
  Bastigor: {
    paldeckNo: '137',
    elements: ['ice'],
    drops: [],
  },
  Prunelia: {
    paldeckNo: '138',
    elements: ['grass', 'dark'],
    drops: [],
  },
  Nyafia: {
    paldeckNo: '139',
    elements: ['dark'],
    drops: [],
  },
  Gildane: {
    paldeckNo: '140',
    elements: ['ground'],
    drops: [],
  },
  Herbil: {
    paldeckNo: '141',
    elements: ['grass', 'normal'],
    drops: [],
  },
  Icelyn: {
    paldeckNo: '142',
    elements: ['ice'],
    drops: [],
  },
  Frostplume: {
    paldeckNo: '143',
    elements: ['ice'],
    drops: [],
  },
  Palumba: {
    paldeckNo: '144',
    elements: ['grass'],
    drops: [],
  },
  Braloha: {
    paldeckNo: '145',
    elements: ['grass', 'ground'],
    drops: [],
  },
  Munchill: {
    paldeckNo: '146',
    elements: ['ice', 'water'],
    drops: [],
  },
  Polapup: {
    paldeckNo: '147',
    elements: ['ice', 'water'],
    drops: [],
  },
  Turtacle: {
    paldeckNo: '148',
    elements: ['water'],
    drops: [],
  },
  'Turtacle Terra': {
    paldeckNo: '148b',
    elements: ['water', 'ground'],
    drops: [],
  },
  Jellroy: {
    paldeckNo: '149',
    elements: ['water', 'dark'],
    drops: [],
  },
  Jelliette: {
    paldeckNo: '150',
    elements: ['water'],
    drops: [],
  },
  Gloopie: {
    paldeckNo: '151',
    elements: ['water', 'dark'],
    drops: [],
  },
  Finsider: {
    paldeckNo: '152',
    elements: ['water'],
    drops: [],
  },
  'Finsider Ignis': {
    paldeckNo: '152b',
    elements: ['water', 'fire'],
    drops: [],
  },
  Ghangler: {
    paldeckNo: '153',
    elements: ['dark', 'water'],
    drops: [],
  },
  'Ghangler Ignis': {
    paldeckNo: '153b',
    elements: ['fire', 'water'],
    drops: [],
  },
  Whalaska: {
    paldeckNo: '154',
    elements: ['ice', 'water'],
    drops: [],
  },
  'Whalaska Ignis': {
    paldeckNo: '154b',
    elements: ['ice', 'fire'],
    drops: [],
  },
  Neptilius: {
    paldeckNo: '155',
    elements: ['water'],
    drops: [],
  },
  'Blue Slime': {
    paldeckNo: '-1',
    elements: ['water'],
    drops: [],
    eventNo: 1,
  },
  'Green Slime': {
    paldeckNo: '-1',
    elements: ['grass'],
    drops: [],
    eventNo: 2,
  },
  'Illuminant Slime': {
    paldeckNo: '-1',
    elements: ['normal'],
    drops: [],
    eventNo: 3,
  },
  'Purple Slime': {
    paldeckNo: '-1',
    elements: ['dark'],
    drops: [],
    eventNo: 4,
  },
  'Rainbow Slime': {
    paldeckNo: '-1',
    elements: ['normal'],
    drops: [],
    eventNo: 5,
  },
  'Red Slime': {
    paldeckNo: '-1',
    elements: ['fire'],
    drops: [],
    eventNo: 6,
  },
  'Demon Eye': {
    paldeckNo: '-1',
    elements: ['dark'],
    drops: [],
    eventNo: 7,
  },
};

export const PAL_NAME_LIST = map(PAL_DATA, (_palData, name) => name);
