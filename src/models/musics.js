import arrangeData from '../controllers/arrangeData'
let musicData = {
    'count': 10,
    'start': 0,
    'total': 94933,
    'musics': [{
            'rating': {
                'max': 10,
                'average': '9.0',
                'numRaters': 554,
                'min': 0
            },
            'author': [{
                    'name': 'Ayumi Hamasaki'
                },
                {
                    'name': '滨崎步'
                },
                {
                    'name': '浜崎あゆみ'
                }
            ],
            'alt_title': '',
            'image': 'https://img1.doubanio.com\/spic\/s3918589.jpg',
            'tags': [{
                    'count': 168,
                    'name': '浜崎あゆみ'
                },
                {
                    'count': 64,
                    'name': '日本'
                },
                {
                    'count': 54,
                    'name': 'J-POP'
                },
                {
                    'count': 45,
                    'name': '滨崎步'
                },
                {
                    'count': 31,
                    'name': 'JPOP'
                },
                {
                    'count': 19,
                    'name': 'J-Pop'
                },
                {
                    'count': 17,
                    'name': '1999'
                },
                {
                    'count': 14,
                    'name': '女声'
                }
            ],
            'mobile_link': 'https:\/\/m.douban.com\/music\/subject\/1465647\/',
            'attrs': {
                'publisher': ['Avex Trax'],
                'singer': ['Ayumi Hamasaki', '滨崎步', '浜崎あゆみ'],
                'version': ['专辑'],
                'pubdate': ['1999-08-11'],
                'title': ['A'],
                'media': ['CD'],
                'tracks': ['1. End roll(Original Version)\n2. monochrome(Original Version)\n3. too late(Original Version)\n4. Trauma(Original Version)\n5. End roll(HAL’S MIX)\n6. monochrome(Keith Litman’s Big City Vocal Mix)\n7. too late(Razor’N Guido Remix)\n8. Trauma(Heavy Shuffle Mix)\n9. End roll(インストゥルメンタル)\n10. monochrome(インストゥルメンタル)\n11. too late(インストゥルメンタル)\n12. Trauma(インストゥルメンタル)\n13. End roll(NEURO-mantic Mix)\n14. monochrome(Dub’s full color Remix)'],
                'discs': ['1']
            },
            'title': 'A',
            'alt': 'https:\/\/music.douban.com\/subject\/1465647\/',
            'id': '1465647'
        },
        {
            'rating': {
                'max': 10,
                'average': '8.7',
                'numRaters': 362,
                'min': 0
            },
            'author': [{
                    'name': 'スーパーカー'
                },
                {
                    'name': 'Supercar'
                }
            ],
            'alt_title': '',
            'image': 'https://img3.doubanio.com\/spic\/s3077811.jpg',
            'tags': [{
                    'count': 78,
                    'name': 'SUPERCAR'
                },
                {
                    'count': 64,
                    'name': '日本'
                },
                {
                    'count': 40,
                    'name': 'j-rock'
                },
                {
                    'count': 34,
                    'name': 'Electronic'
                },
                {
                    'count': 24,
                    'name': 'J-Pop'
                },
                {
                    'count': 20,
                    'name': 'indie'
                },
                {
                    'count': 14,
                    'name': 'indie-rock'
                },
                {
                    'count': 11,
                    'name': 'Supercar'
                }
            ],
            'mobile_link': 'https:\/\/m.douban.com\/music\/subject\/1791139\/',
            'attrs': {
                'publisher': ['Ki\/oon'],
                'singer': ['スーパーカー', 'Supercar'],
                'version': ['专辑'],
                'pubdate': ['2005-03-24'],
                'title': ['A'],
                'media': ['CD'],
                'tracks': ['1. CREAM SODA\n2. LUCKY\n3. PLANET\n4. DRIVE\n5. SUNDAY PEOPLE\n6. MY GIRL\n7. LOVE FOREVER\n8. FAIRWAY\n9. WHITE SURF style5.\n10. STROBOLIGHTS\n11. YUMEGIWA LAST BOY\n12. AOHARU YOUTH\n13. RECREATION\n14. BGM\n15. LAST SCENE\n16. WONDER WORD ※〈初回その他〉'],
                'discs': ['1']
            },
            'title': 'A',
            'alt': 'https:\/\/music.douban.com\/subject\/1791139\/',
            'id': '1791139'
        },
        {
            'rating': {
                'max': 10,
                'average': '8.1',
                'numRaters': 480,
                'min': 0
            },
            'author': [{
                'name': 'The Beauty The World Makes Us Hope For'
            }],
            'alt_title': '',
            'image': 'https://img3.doubanio.com\/spic\/s24227646.jpg',
            'tags': [{
                    'count': 45,
                    'name': 'Post-Rock'
                },
                {
                    'count': 14,
                    'name': '法国'
                },
                {
                    'count': 10,
                    'name': '2012'
                },
                {
                    'count': 9,
                    'name': 'post-rock'
                },
                {
                    'count': 8,
                    'name': '后摇'
                },
                {
                    'count': 5,
                    'name': 'PostRock'
                },
                {
                    'count': 4,
                    'name': 'TheBeautyTheWorldMakesUsHopeFor'
                },
                {
                    'count': 2,
                    'name': 'Post-rock'
                }
            ],
            'mobile_link': 'https:\/\/m.douban.com\/music\/subject\/20378835\/',
            'attrs': {
                'publisher': ['Self Released'],
                'singer': ['The Beauty The World Makes Us Hope For'],
                'version': ['EP'],
                'pubdate': ['2012-09-15'],
                'title': ['A'],
                'media': ['数字(Digital)'],
                'tracks': ["01. With these foreign feet which surprise us, let's leap into the sea\n02. From these pains wings are spurting and then vanishing in the midst of a dance\n03. Matter piles up, knowledge is passed on, curiosity leads to many feats"],
                'discs': ['1']
            },
            'title': 'A',
            'alt': 'https:\/\/music.douban.com\/subject\/20378835\/',
            'id': '20378835'
        },
        {
            'rating': {
                'max': 10,
                'average': '8.6',
                'numRaters': 106,
                'min': 0
            },
            'author': [{
                'name': 'A公馆'
            }],
            'alt_title': 'A公馆',
            'image': 'https://img1.doubanio.com\/spic\/s4043588.jpg',
            'tags': [{
                    'count': 25,
                    'name': 'A公馆'
                },
                {
                    'count': 12,
                    'name': 'Rock'
                },
                {
                    'count': 11,
                    'name': '中国摇滚'
                },
                {
                    'count': 9,
                    'name': '内地'
                },
                {
                    'count': 6,
                    'name': '北京'
                },
                {
                    'count': 5,
                    'name': 'alternative-rock'
                },
                {
                    'count': 4,
                    'name': '中国【中国】'
                },
                {
                    'count': 3,
                    'name': '中国土摇'
                }
            ],
            'mobile_link': 'https:\/\/m.douban.com\/music\/subject\/4120820\/',
            'attrs': {
                'publisher': ['A公馆独立音乐工作室'],
                'singer': ['A公馆'],
                'version': ['EP'],
                'pubdate': ['2009-12-03'],
                'title': ['A'],
                'media': ['数字(Digital)'],
                'tracks': ['1 我就在\n2 恋爱妄想曲\n3 勇敢者的河\n4 嗅'],
                'discs': ['1']
            },
            'title': 'A',
            'alt': 'https:\/\/music.douban.com\/subject\/4120820\/',
            'id': '4120820'
        },
        {
            'rating': {
                'max': 10,
                'average': '7.0',
                'numRaters': 136,
                'min': 0
            },
            'author': [{
                'name': 'Rainbow'
            }],
            'alt_title': '1st Single',
            'image': 'https://img1.doubanio.com\/spic\/s4445378.jpg',
            'tags': [{
                    'count': 24,
                    'name': '韩国'
                },
                {
                    'count': 24,
                    'name': 'Rainbow'
                },
                {
                    'count': 24,
                    'name': 'K-Pop'
                },
                {
                    'count': 8,
                    'name': '组合'
                },
                {
                    'count': 5,
                    'name': '2010'
                },
                {
                    'count': 2,
                    'name': '韩国组合'
                },
                {
                    'count': 2,
                    'name': '韩国歌手'
                },
                {
                    'count': 2,
                    'name': '女声'
                }
            ],
            'mobile_link': 'https:\/\/m.douban.com\/music\/subject\/5041490\/',
            'attrs': {
                'publisher': ['DSP'],
                'singer': ['Rainbow'],
                'version': ['单曲'],
                'pubdate': ['2010-08-12'],
                'title': ['A'],
                'media': ['数字(Digital)'],
                'tracks': ['1-A\n2-A (Inst.)'],
                'discs': ['1']
            },
            'title': 'A',
            'alt': 'https:\/\/music.douban.com\/subject\/5041490\/',
            'id': '5041490'
        },
        {
            'rating': {
                'max': 10,
                'average': '7.1',
                'numRaters': 38,
                'min': 0
            },
            'author': [{
                'name': 'Ambiente'
            }],
            'alt_title': '',
            'image': 'https://img3.doubanio.com\/spic\/s3924386.jpg',
            'tags': [{
                    'count': 35,
                    'name': 'Post-Rock'
                },
                {
                    'count': 9,
                    'name': 'Ambiente'
                },
                {
                    'count': 6,
                    'name': 'Instrumental'
                },
                {
                    'count': 6,
                    'name': 'Ambient'
                },
                {
                    'count': 5,
                    'name': '2009'
                },
                {
                    'count': 3,
                    'name': 'Indie'
                },
                {
                    'count': 2,
                    'name': 'Shoegaze'
                },
                {
                    'count': 2,
                    'name': 'Mexico'
                }
            ],
            'mobile_link': 'https:\/\/m.douban.com\/music\/subject\/3911674\/',
            'attrs': {
                'publisher': ['ENSO'],
                'tracks': ["01. Mimesis\n02. Infants Become Robots\n03. Touched By Something Extra\n04. Great Beauty\n05. Before It's Over\n06. Cronica\n07. Perceptions\n08. Nothingness"],
                'singer': ['Ambiente'],
                'pubdate': ['2009'],
                'title': ['A']
            },
            'title': 'A',
            'alt': 'https:\/\/music.douban.com\/subject\/3911674\/',
            'id': '3911674'
        },
        {
            'rating': {
                'max': 10,
                'average': '7.4',
                'numRaters': 75,
                'min': 0
            },
            'author': [{
                'name': '魔力大巴 MAGICBUS'
            }],
            'alt_title': '来势汹涌',
            'image': 'https://img3.doubanio.com\/spic\/s4673446.jpg',
            'tags': [{
                    'count': 11,
                    'name': 'MAGICBUS,魔力大巴'
                },
                {
                    'count': 7,
                    'name': '内地'
                },
                {
                    'count': 6,
                    'name': '独立音乐'
                },
                {
                    'count': 6,
                    'name': 'brit-pop'
                },
                {
                    'count': 5,
                    'name': '中国摇滚'
                },
                {
                    'count': 4,
                    'name': 'indie-rock'
                },
                {
                    'count': 4,
                    'name': 'Indie'
                },
                {
                    'count': 3,
                    'name': '英伦'
                }
            ],
            'mobile_link': 'https:\/\/m.douban.com\/music\/subject\/6027540\/',
            'attrs': {
                'publisher': ['麦爱音乐'],
                'singer': ['魔力大巴 MAGICBUS'],
                'version': ['EP'],
                'pubdate': ['2011-03-25'],
                'title': ['A'],
                'media': ['CD'],
                'tracks': ['1.爱情需要夜\n2.A\n3.Come back man\n4.别担心'],
                'discs': ['1']
            },
            'title': 'A',
            'alt': 'https:\/\/music.douban.com\/subject\/6027540\/',
            'id': '6027540'
        },
        {
            'rating': {
                'max': 10,
                'average': '7.2',
                'numRaters': 54,
                'min': 0
            },
            'author': [{
                'name': 'Pan Sonic'
            }],
            'alt_title': '',
            'image': 'https://img1.doubanio.com\/spic\/s1446658.jpg',
            'tags': [{
                    'count': 11,
                    'name': 'Electronic'
                },
                {
                    'count': 7,
                    'name': 'Experimental'
                },
                {
                    'count': 4,
                    'name': '电子'
                },
                {
                    'count': 4,
                    'name': 'minimal'
                },
                {
                    'count': 3,
                    'name': '芬兰'
                },
                {
                    'count': 3,
                    'name': '实验'
                },
                {
                    'count': 3,
                    'name': 'avant-garde'
                },
                {
                    'count': 2,
                    'name': 'experimental'
                }
            ],
            'mobile_link': 'https:\/\/m.douban.com\/music\/subject\/1432694\/',
            'attrs': {
                'publisher': ['Mute U.S.'],
                'singer': ['Pan Sonic'],
                'pubdate': ['23 February, 1999'],
                'title': ['A'],
                'media': ['Audio CD'],
                'tracks': ['• Maa\r\n• Pala\r\n• Lomittain\r\n• Joskus\r\n• Askel\r\n• Ahdin\r\n• A-Kemia\r\n• Johto 1\r\n• Havainto\r\n• Etaisyys\r\n• Aleneva\r\n• Aktiivi\r\n• Rajatila\r\n• Johto 2\r\n• Telakoe\r\n• Sarmays\r\n• Voima'],
                'discs': ['1']
            },
            'title': 'A',
            'alt': 'https:\/\/music.douban.com\/subject\/1432694\/',
            'id': '1432694'
        },
        {
            'rating': {
                'max': 10,
                'average': '7.0',
                'numRaters': 51,
                'min': 0
            },
            'author': [{
                'name': 'Cass McCombs'
            }],
            'alt_title': '',
            'image': 'https://img1.doubanio.com\/spic\/s1510058.jpg',
            'tags': [{
                    'count': 11,
                    'name': 'Folk'
                },
                {
                    'count': 7,
                    'name': 'indie'
                },
                {
                    'count': 4,
                    'name': '美国'
                },
                {
                    'count': 4,
                    'name': 'CassMcCombs'
                },
                {
                    'count': 3,
                    'name': 'Indie-Rock'
                },
                {
                    'count': 2,
                    'name': 'Indie'
                },
                {
                    'count': 2,
                    'name': 'Dream-Pop'
                },
                {
                    'count': 2,
                    'name': 'Alt-Country'
                }
            ],
            'mobile_link': 'https:\/\/m.douban.com\/music\/subject\/1583300\/',
            'attrs': {
                'publisher': ['Monitor Records'],
                'singer': ['Cass McCombs'],
                'pubdate': ['2003-05-20'],
                'title': ['A'],
                'media': ['Audio CD'],
                'tracks': ['I Went To The Hospital', 'Bobby, King Of Boys Town', "What Isn't Nature", 'Aids In Africa', 'A Comedian Is Someone Who Tells Jokes', "Gee, It's Good To Be Back Home", 'Meet Me Here At Dawn', 'When The Bible Was Wrote', 'My Pilgrim Dear', 'Bedding Down Post Xmas Time', 'My Master'],
                'discs': ['1']
            },
            'title': 'A',
            'alt': 'https:\/\/music.douban.com\/subject\/1583300\/',
            'id': '1583300'
        },
        {
            'rating': {
                'max': 10,
                'average': '7.8',
                'numRaters': 22,
                'min': 0
            },
            'author': [{
                'name': 'Turzi'
            }],
            'alt_title': '',
            'image': 'https://img1.doubanio.com\/spic\/s2711159.jpg',
            'tags': [{
                    'count': 5,
                    'name': 'Krautrock'
                },
                {
                    'count': 4,
                    'name': 'Electronic'
                },
                {
                    'count': 3,
                    'name': 'Turzi'
                },
                {
                    'count': 3,
                    'name': 'Indie'
                },
                {
                    'count': 2,
                    'name': 'Progressive-Rock'
                },
                {
                    'count': 1,
                    'name': '封面上一个男人的侧影'
                },
                {
                    'count': 1,
                    'name': 'l'
                },
                {
                    'count': 1,
                    'name': 'electronica'
                }
            ],
            'mobile_link': 'https:\/\/m.douban.com\/music\/subject\/2260092\/',
            'attrs': {
                'publisher': ['Kemado'],
                'singer': ['Turzi'],
                'pubdate': ['2007-09-04'],
                'title': ['A'],
                'media': ['Audio CD'],
                'tracks': ['Smokes (One Switch To Collision)', 'Heavy Horse (Lisa Li Lund)', 'Ready to Fly (Aqua Nebulla Oscillator)', 'I Was Down (Wolf Rayet)', 'The Dog (Service)', 'High America (Juan Trip)', 'Sin (Butch McKoy)', 'New Orleans (Chicros)', 'Mantra (Mogadishow)', 'Psychopedestrian (Kill for Total Peace)', 'Beware (Musikasphaera)', 'Tremolo Army (Turzi)', "The Countess's Smiles (Ulysse)", 'Doudouk (Etienne Jaumet)', 'Improvisation (Rob)'],
                'discs': ['1']
            },
            'title': 'A',
            'alt': 'https:\/\/music.douban.com\/subject\/2260092\/',
            'id': '2260092'
        }
    ]
}
let musics = arrangeData('music', musicData)
export default musics