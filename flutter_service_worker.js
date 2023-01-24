'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "282b46d8d8fa9b179ac046d9145b9e0b",
".git/config": "0fb813a94ee7036f2d0d1057a22fab2b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2946da8af78a7bc02d3b2c2576c5a316",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3799a6426b98a7991fa6a3723e6576bb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8d69af8545e53f71c384eafcc2e6e133",
".git/logs/refs/heads/main": "b1e375e37ca28469713307e936d506e7",
".git/logs/refs/remotes/origin/main": "969c98bfbe96953763a3bdfd3129befe",
".git/objects/04/621ca5ff500f3d16b1ec746fc4e0173f95ae86": "e6db2446c68c040379c2047bb3bbdb10",
".git/objects/06/cc2ac2559224d1b9e3ceeb365bd0232d59aadb": "0610ba46f3fa36688c70ac5c502d5704",
".git/objects/08/6657e30f3a2c4f11463cde50bfac5bf1371319": "322f4269ceed6ff9b8ec65a820a24a4d",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/0b/809b0059b13b10ba8bec27b47a4db4779d9daf": "3e8882584aeb7557a3925afa7a15136e",
".git/objects/11/acc1b5fbeafe5ab6767241a85a49d5dec0cb08": "d10c2174b6f3d4525f00e7db8c5ade67",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/cfb708844300eb56c01f8b62f8d38e6396d6a4": "b405b202d8e424f772fa0ca1bb536c24",
".git/objects/1c/6003d6378be684f6f986933f928e0dd3316bc4": "83c7e91aaa1fe78523cf78d924e9ec61",
".git/objects/1c/6f89a56f1671940cd1ffe3c67002aa9686047a": "74c93ecc4f859efc4aa10e0de6cd6a97",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/26/307f7254b404fe9e42877a9133bc07969f6182": "0e50ddf66b9e915fe7e11a7209338332",
".git/objects/26/44b60b86a993370a8bbcafb15e6559996bdaff": "51df647f9ffddde2c108b0c254c0ff01",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/33/72c94d7834711c30c1a6731fe880b8b0f3d62a": "ba9ce8d8b36197cedb96d07b60176033",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/34/6a349675c01c82bf36b5ccc915ff624ec2699d": "23f85dc97cf4aabdf572cc8c87b99ea6",
".git/objects/3b/4cbaa04ce068273cd35657e8a7ac4f45189a66": "8166907e3d13b425c55769b121d87e14",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/46/246a8bbf284a4c87ca5cbb04d237f9c91da3db": "e64c0e002f0a59a0543ebfd396fcc997",
".git/objects/47/2b6fb4d18a0261920840dc546348743ef097db": "11948a92de4e381b95ecb021ecdb2960",
".git/objects/4a/23e7938f392121c0cb344c4962ce99e6f98851": "3c20aa1ea2e0fa7d42eefad1cdf1e11c",
".git/objects/4a/5f7c2b1c640fb100259a2ebff873044dacdb6b": "c94e364dc98664054a2810950845a99a",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4b/ea67e853faadbdd2b553609e15911dbcd387df": "20000687a44f990f01a7e356571b5ec4",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4e/98f11a5d34bccf1812c239da784ca9ebc1523c": "05d397ca0df046b07256a5804a823623",
".git/objects/52/3c9ba88f34dad7e978eb2e8159c1235f4b70af": "47259018fbcfd3b65fcb7d27c6704e68",
".git/objects/5f/c7acb4a95b7ac9180ed12e89f4d5342c1bf4b8": "d9ebd972a907779e1c1fca81d8997650",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/66/31e733ff2835d616f3055e99d3020e29329f42": "d1176ccbab48227280c440a7ab2f85fb",
".git/objects/67/427db38beca5b519ea101bd07eff00d52d4503": "67b25ae823349db6446c7ef6a4530ddb",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/6a/abee813db48889c6dd96d674278e65cb18304a": "133b89cb52cc569807311dbb306709e8",
".git/objects/6c/3dc4d91d9c95811f90013370f6b0f9fa799ff4": "643938abef15dace977103aa590f825a",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/75/48687a48759f7164d969649e35cec6bfd0b602": "c6bf9765d87579ce91a5559de8f246fa",
".git/objects/78/35b75c9d052f0ab20b75e3088a8dde5c88bd3b": "53983b9c4a00a2e2697f62d6c4599b0a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/00bd88dc756f67587260fba41aba5b42971ddc": "e2f5c1d7b7b70003ec551d1bab4dd89f",
".git/objects/7a/880b39992b37c4dbb53f5b28902ee5559b9166": "b28bb41bfb424571f2e1d5c08902b14c",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7c/6dd98e64b640705b98036b0f76b26a7b261b49": "c8d016c0979d3d552406ff838e3c59f9",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/81/00afdb69c346fa0997672c942023a5239b4d70": "abf4789e81c1aa610ba4a2eddd1147b7",
".git/objects/83/d5c29270dee352d56ce56c416c5283b7b193a5": "eb0afea93176e90663d695c004f1f58d",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "9c7bb9c736b80fd0388611991ef894bc",
".git/objects/86/138f04221d332112ca81cef40736b35e188c0a": "32fc3b020ac7500e245e46bed7672a26",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e7124ce687a00d96e908fdc8208f8939c7bc33": "ecaa559defb6ff16d175186afa6eec2d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/8d/35fa31792235aeb8b6becf7f0c4039dd184d4c": "13a8d959307daff567d870aac3675b79",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/8e/4f638d9e76fd6be165925e6886b64987a321a8": "6d3c4327cad79ee6d52849712f6d935f",
".git/objects/90/3375bde5c9d0df2c351fe47ffba10969299107": "e5fd26008eec3cde42299c8004b0863b",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/c2d3e2261d46be3632227046415a8ed9ca248d": "c91c05185a6a6002322d802e6473ce7a",
".git/objects/9d/d7969e84b81fb8cc5dfabdfa0e36049dbbb8ea": "6ddda32bebaf5cb3cfd2fb09a295e8f6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/b5ba32b2b614380c0f606ded8f0c4edc67a06b": "c8509419bedf87c61b1202d34952aad2",
".git/objects/a5/cdfe7e7fcdb49f9d4ce1872badbee40e074701": "04ebc9b2fb44135f40733e8e4ed5141c",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/af/55b60249a01657be10cd211dae9fa34651945a": "b8f87769732d34aa4e948b673436821c",
".git/objects/b0/01e257e0cacdff3e405955f5175693ad451777": "5988c44d91d20fdb56c841de749259c6",
".git/objects/b1/641829e17be5bfe5f9c52cb9613e14336a6fd1": "aac16d60c98832df56a476adb0224d7c",
".git/objects/b3/9a432fa2c723557f702748d43756a45f0d3981": "99dccca73b685156138bcbd196b764bc",
".git/objects/b3/d8f1fbeaba2ba8ab01957d2ca4972846b18ac8": "244303d656099e3517ba21e7024d6b0c",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c3/26f2bf426fe0e3f85bb6eba95ac95cfe92cc40": "8618932f0a774cd54f12fcfae7d65f2f",
".git/objects/c3/2a14be7a8d8006966205686f46576534024c90": "d0b212130666a799436c7dcbd6625aaf",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c8/28b74175214c0dc71ac71a385d6261d2012c2c": "5b8300ef1ff0bb87202a552c442b000b",
".git/objects/c9/543458560f3095039fbd6a92726c0faf0dc438": "75474261660675106c81a9141d1e277b",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/783b42064076a8342c0572cf4e4a25dbd7b353": "b7d15a31df29d412573dc83945a842cb",
".git/objects/cd/b96d287f410125bb116a54e55ae5403834432d": "46a8b758f1a0a2197b84faefbdf97d45",
".git/objects/d2/6da585d9d24e044c96c182db435e2aeecda884": "766dc22c9177965f0604a7d65170a833",
".git/objects/d3/a765a0b43331a6c88f8b24df0cfea22c8d3ec9": "73fc0311ad536cf030585eaef5009c5c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/dc/c043b7d4a1d56aceacf491d8815372702f86f5": "dee4d52c53f48b147820540f99e47c1b",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/e931a24b1470d38c129a9805b9462b8e3605f0": "8670eac27f18390eea9c5e84336f3f5e",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/fb/02b83731f1c54219f4b1adb7f8734cc6d9e31b": "87e5bc8352659376b87eeefd58240aa9",
".git/objects/fd/703d1f36b3ab7ec34deeb0dcf04e867db75265": "2bf9e456605aa1d76e5f42ef8aadcdae",
".git/objects/pack/pack-2c97fec5879317aa7858310d8c98ca61d6070a9c.idx": "1df9be24c1d8da31bfefae64bae94517",
".git/objects/pack/pack-2c97fec5879317aa7858310d8c98ca61d6070a9c.pack": "2088526828ad631297a664e3bae55ded",
".git/ORIG_HEAD": "82dc68066ad8d4050488e21f820a10c8",
".git/refs/heads/main": "a20075cbd8a1bf75f9b29e86910dd321",
".git/refs/remotes/origin/main": "859f667c0eef257dabb8a275b78cfc37",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/workspace.xml": "9ea430b8ae0f12e37cb75274f0d7af84",
"assets/AssetManifest.json": "7dff33258b22dea9fe169b31f96c0e29",
"assets/assets/fonts/Cairo-Black.ttf": "c3da5664903bac89a1e5a6f38e47a778",
"assets/assets/fonts/Cairo-Bold.ttf": "ef55322bc2031017175022b779940cb0",
"assets/assets/fonts/Cairo-ExtraBold.ttf": "0645b8a99ffdc54a258b3eb7f6d160b9",
"assets/assets/fonts/Cairo-ExtraLight.ttf": "a20fc041a3249119d5ac5232a72aab6d",
"assets/assets/fonts/Cairo-Light.ttf": "ce6526395448171bce996359f9b41af7",
"assets/assets/fonts/Cairo-Medium.ttf": "dcb85dee1c4674ba69ab76c7275b515e",
"assets/assets/fonts/Cairo-Regular.ttf": "374ef4fe60ef13426296c292bba5e237",
"assets/assets/fonts/Cairo-SemiBold.ttf": "b9eb3a03009d618aa53a0ca8eaa6ab4b",
"assets/assets/fonts/SEGOEUI.TTF": "623c7118249e082fe87a78e08506cb4b",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/loading.gif": "d71d8ccb7264fb1ca4a4ec9a871849d1",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/menu_login.svg": "a4893b7af1fdd25854c48ef38631c7af",
"assets/assets/icons/menu_logout.svg": "9f3180b0ce7fde8f54e79ac403634aa7",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/images/deafult_product.png": "91953036186c2c01971ef750fc402876",
"assets/assets/images/deafult_profile.png": "dc8b1732c919ca17845aab44dc3afb27",
"assets/assets/images/demo.jpg": "eea5c2c1b14a65caf8c3e0ca8e122b29",
"assets/assets/images/error_image.png": "8da535d34c194a8c7f64092b36b0b80b",
"assets/assets/images/logo.png": "872f1c20b90685d798af3ef774315002",
"assets/assets/images/profile_pic.jpg": "0a2da5484add5e45bfb22182f3ca22da",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/FontManifest.json": "da2e5672b3457ce94ff8e9ee7af63e2d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2e6aac978a6bf7a8a10b385af0f0ba7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_paypal/lib/src/assets/img/cloud_state.png": "e695e021561a6d9754f06038b4d6b1d9",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "fb26d63db777dea0a21a98145a15053e",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "d41d8cd98f00b204e9800998ecf8427e",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3b9f3f7b7ab969654db9713c8a549625",
"/": "3b9f3f7b7ab969654db9713c8a549625",
"main.dart.js": "8988465e23b11b46c2b7f06b4e45ed74",
"manifest.json": "db4b803c10b4176e0a0a08bb2ef52853",
"README.md": "324f5b243e97cc96e50da5af681846ee",
"version.json": "22806f0dfab8616d79b7cc36e7ddf29f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
