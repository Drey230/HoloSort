dataSetVersion = "2021-12-06"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Generation",
    key: "generation",
    tooltip: "Check this to restrict to certain generations.",
    checked: false,
    sub: [
        { name: "Hololive 0th gen", key: "gen0" },
        { name: "Hololive 1st gen", key: "gen1" },
        { name: "Hololive 2nd gen", key: "gen2" },
        { name: "Hololive 3rd gen", key: "gen3" },
        { name: "Hololive 4th gen", key: "gen4" },
        { name: "Hololive 5th gen", key: "gen5" },
		{ name: "Hololive 6th gen", key: "gen6" },
        { name: "Hololive GAMERS", key: "gamers" },
        { name: "Hololive Indonesia", key: "id" },
        { name: "Hololive English", key: "en" },
		{ name: "Hololive Other", key: "other" },
		{ name: "Hololive Mamas", key: "mama" },
    ]
    },
  {
    name: "Remove Non-JP Holos",
    key: "notjphololive",
    tooltip: "Check this to remove all non-JP Hololive members.",
    checked: false
  },
  {
    name: "Remove Mamas",
    key: "isMama",
    tooltip: "Check this to remove all Hololive mamas.",
	checked: false
  },
  {
    name: "Remove Former Members",
    key: "former",
    tooltip: "Check this to remove all former members.",
	checked: false
  }
];

dataSet[dataSetVersion].characterData = [
	{
		name: "A-chan",
        img: "z25AKd3.png",
		opts: {
			generation: ["other"],
		}
    },
	{
		name: "Tokino Sora",
        img: "el6ieQx.png",
		opts: {
			generation: ["gen0"],
		}
    },
    {
        name: "Roboco",
        img: "Nw2r4BG.jpg",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Sakura Miko",
        img: "Gb3uHb2.png",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Hoshimachi Suisei",
        img: "gAQCxaF.png",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "AZKi",
        img: "S5dY4v0.png",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Akai Haato",
        img: "MUBdSy6.png",
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Yozora Mel",
        img: "sqSBREB.png",
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Natsuiro Matsuri",
        img: "qrdgclm.png",
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Aki Rosenthal",
        img: "6raI9BB.png",
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Shirakami Fubuki",
        img: "pXtfQNq.png",
        opts: {
            generation: ["gen1", "gamers"],
        }
    },
    {
        name: "Oozora Subaru",
        img: "e0pzYCp.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Yuzuki Choco",
        img: "6taIs7y.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Murasaki Shion",
        img: "2rUd9Hj.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Nakiri Ayame",
        img: "8ICfmE6.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Minato Aqua",
        img: "GEAHYcy.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Ookami Mio",
        img: "xIiwgJB.png",
        opts: {
            generation: ["gamers"],
        }
    },
    {
        name: "Nekomata Okayu",
        img: "sb6ISaI.png",
        opts: {
            generation: ["gamers"],
        }
    },
    {
        name: "Inugami Korone",
        img: "M2UukBq.png",
        opts: {
            generation: ["gamers"],
        }
    },
    {
        name: "Usada Pekora",
        img: "hvwVxHl.png",
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Uruha Rushia",
        img: "1iy3jFk.png",
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Shiranui Flare",
        img: "1FmxEnk.png",
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Shirogane Noel",
        img: "xS02Vsq.png",
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Houshou Marine",
        img: "zSn4YYH.png",
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Tsunomaki Watame",
        img: "pOyZC1X.png",
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Tokoyami Towa",
        img: "ig4gwEF.png",
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Kiryu Coco",
        img: "fal9cIp.png",
        opts: {
            generation: ["gen4"],
            former: true
        }
    },
    {
        name: "Amane Kanata",
        img: "codYKLf.png",
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Himemori Luna",
        img: "wdZUtEg.png",
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Yukihana Lamy",
        img: "arLeQSp.png",
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "Momosuzu Nene",
        img: "lyNlJW3.png",
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "Shishiro Botan",
        img: "f698oAj.png",
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "Omaru Polka",
        img: "HGxfwSH.png",
        opts: {
            generation: ["gen5"],
        }
    },
	{
        name: "Laplus Darknesss",
        img: "fRyajU1.png",
        opts: {
            generation: ["gen6"],
        }
    },
	{
        name: "Takane Lui",
        img: "iyO2yZA.png",
        opts: {
            generation: ["gen6"],
        }
    },
	{
        name: "Hakui Koyori",
        img: "aBUtcIS.png",
        opts: {
            generation: ["gen6"],
        }
    },
	{
        name: "Sakamata Chloe",
        img: "tmz5QAa.png",
        opts: {
            generation: ["gen6"],
        }
    },
	{
        name: "Kazama Iroha",
        img: "P1hkWhe.png",
        opts: {
            generation: ["gen6"],
        }
    },
    {
    name: "Civia",
    img: "TQwYoKA.png",
        opts: {
            generation: ["other"],
            notjphololive: true,
            former: true
        }
    },
    {
    name: "Ayunda Risu",
        img: "BhRbyEU.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
    name: "Moona Hoshinova",
        img: "u9NwKye.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Airani Iofifteen",
        img: "hGAkQXZ.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Kureiji Ollie",
        img: "vHDoixD.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Anya Melfissa",
        img: "6ZrfPUo.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Pavolia Reine",
        img: "DnVmYDq.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Mori Calliope",
        img: "j8erQSM.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Takanashi Kiara",
        img: "8jD2gBo.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Ninomae Ina'nis",
        img: "p9R7Iod.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Gawr Gura",
        img: "WtmZaXM.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Watson Amelia",
        img: "1IBgtt8.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "IRyS",
        img: "dhZABvz.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Tsukumo Sana",
        img: "g7Zrvv3.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Ceres Fauna",
        img: "HMLilU0.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Ouro Kronii",
        img: "aj5fCrx.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Nanashi Mumei",
        img: "EokVK8K.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Hakos Baelz",
        img: "87BaHiK.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
	{
        name: "Shigure Ui",
        img: "SbqAKsI.png",
        opts: {
            generation: ["mama"],
            notjphololive: true,
			isMama: true
        }
    },
	{
        name: "Kagura Nana",
        img: "7RkDnhB.png",
        opts: {
            generation: ["mama"],
            notjphololive: true,
			isMama: true
        }
    },
	{
        name: "Pochimaru",
        img: "x97l6Hp.png",
        opts: {
            generation: ["mama"],
            notjphololive: true,
			isMama: true
        }
    },
	{
        name: "Ayamy",
        img: "QYv8hWw.png",
        opts: {
            generation: ["mama"],
            notjphololive: true,
			isMama: true
        }
    },
	{
        name: "Aoi Nabi",
        img: "s0J6dUj.png",
        opts: {
            generation: ["mama"],
            notjphololive: true,
			isMama: true
        }
    },
	{
        name: "Nachoneko",
        img: "dZYB4fv.png",
        opts: {
            generation: ["mama"],
            notjphololive: true,
			isMama: true
        }
    },
];
