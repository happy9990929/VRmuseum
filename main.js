const mapImg = () => {
  return `./images/map.png?${Date.now()+Math.floor(Math.random()*100000)}`;
}
const infoImg = () => {
  return `./images/info.png?${Date.now()+Math.floor(Math.random()*100000)}`;
}
const arrowImg = () => {
  return `./images/arrow.png?${Date.now()+Math.floor(Math.random()*100000)}`;
}

window.onload = function() {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalText = document.getElementById('modalText');
  const loading = document.getElementById('loading');
  const loadingText = document.getElementById('loadingText');
  const copyrightText = document.getElementById('copyrightText');
  const toggleCopyright = document.getElementById('toggleCopyright');
  document.getElementById('return').addEventListener('click', () => {
    modal.style.display = 'none';
  })
  toggleCopyright.addEventListener('click', () => {
    const style = copyrightText.style.display;
    if(style === 'none') {
      copyrightText.style.display = 'block';
    } else {
      copyrightText.style.display = 'none';
    }
  })

  getCanvas();
}

function getCanvas() {
  const container = document.querySelector( '#container' );

  // 娛樂
  const lobby = new PANOLENS.ImagePanorama( './images/IMG_20210417_105125_00_031.jpg' );
  const entertainment = new PANOLENS.ImagePanorama( './images/IMG_20210417_100426_00_970.jpg' );
  const hallway = new PANOLENS.ImagePanorama( './images/IMG_20210417_100445_00_971.jpg' );
  const basketball = new PANOLENS.ImagePanorama( './images/IMG_20210417_100537_00_972.jpg' );
  const city = new PANOLENS.ImagePanorama( './images/IMG_20210417_100627_00_974.jpg' );
  const baseball = new PANOLENS.ImagePanorama( './images/IMG_20210417_100756_00_976.jpg' );
  const dance = new PANOLENS.ImagePanorama( './images/IMG_20210417_100940_00_977.jpg' );
  const screen = new PANOLENS.ImagePanorama( './images/IMG_20210417_101109_00_978.jpg' );

  // 工業
  const train = new PANOLENS.ImagePanorama( './images/IMG_20210417_101726_00_981.jpg' );
  const train2 = new PANOLENS.ImagePanorama( './images/IMG_20210417_101822_00_983.jpg' );
  const history = new PANOLENS.ImagePanorama( './images/IMG_20210417_101928_00_984.jpg' );
  const history2 = new PANOLENS.ImagePanorama( './images/IMG_20210417_101949_00_985.jpg' );
  const internet = new PANOLENS.ImagePanorama( './images/IMG_20210417_102021_00_986.jpg' );
  const internet2 = new PANOLENS.ImagePanorama( './images/IMG_20210417_102104_00_987.jpg' );
  const racket = new PANOLENS.ImagePanorama( './images/IMG_20210417_102223_00_990.jpg' );
  const racketMan = new PANOLENS.ImagePanorama( './images/IMG_20210417_102211_00_989.jpg' );
  const shose = new PANOLENS.ImagePanorama( './images/IMG_20210417_102305_00_991.jpg' );
  const shose2 = new PANOLENS.ImagePanorama( './images/IMG_20210417_102333_00_992.jpg' );

  // 星際
  const star = new PANOLENS.ImagePanorama( './images/IMG_20210417_104424_00_026.jpg' );
  const space = new PANOLENS.ImagePanorama( './images/IMG_20210417_104517_00_027.jpg' );
  const light = new PANOLENS.ImagePanorama( './images/IMG_20210417_104710_00_029.jpg' );

  // lobby infospot
  const lobbyMap1 = new PANOLENS.Infospot(200, mapImg());
  lobbyMap1.position.set(-1000, -300, 2000);
  lobbyMap1.addHoverText('防疫戰鬥營', 80);

  const lobbyMap2 = new PANOLENS.Infospot(800, mapImg());
  lobbyMap2.position.set(0, -1000, -8000);
  lobbyMap2.addHoverText('台灣工業的發展', 80);

  const lobbyMap3 = new PANOLENS.Infospot(300, mapImg());
  lobbyMap3.position.set(-3000, -300, -500);
  lobbyMap3.addHoverText('星際廣場', 80);

  lobby.add(lobbyMap1, lobbyMap2, lobbyMap3);
  showLoading(lobby, '國立科學工藝博物館');

  lobbyMap1.addEventListener('click', function(){ viewer.setPanorama( entertainment ); });
  lobbyMap2.addEventListener('click', function(){ viewer.setPanorama( train ); });
  lobbyMap3.addEventListener('click', function(){ viewer.setPanorama( star ); });

  // entertainment infospot
  const entertainmentInfo = new PANOLENS.Infospot(200, mapImg());
  entertainmentInfo.position.set(-1200, -200, 2000);
  entertainmentInfo.addHoverText('防疫金臂人', 80);

  const entertainmentMap1 = new PANOLENS.Infospot(300, mapImg());
  entertainmentMap1.position.set(-3000, -1500, -4000);
  entertainmentMap1.addHoverText('結核鬥牛賽', 80);

  const entertainmentMap2 = new PANOLENS.Infospot(300, mapImg());
  entertainmentMap2.position.set(3500, -600, -4000);
  entertainmentMap2.addHoverText('拱型走廊', 80);

  const entertainmentMap3 = new PANOLENS.Infospot(300, mapImg());
  entertainmentMap3.position.set(-4000, -800, 500);
  entertainmentMap3.addHoverText('慾望城市', 80);

  const entertainmentMap4 = new PANOLENS.Infospot(300, arrowImg());
  entertainmentMap4.position.set(2000, -200, 2000);
  entertainmentMap4.addHoverText('防疫大擂台', 80);

  entertainment.add( entertainmentInfo, entertainmentMap1, entertainmentMap2, entertainmentMap3, entertainmentMap4 );
  showLoading(entertainment, '防疫戰鬥營');

  entertainmentInfo.addEventListener('click', function(){ viewer.setPanorama( baseball ); });
  entertainmentMap2.addEventListener('click', function(){ viewer.setPanorama( hallway ); });
  entertainmentMap1.addEventListener('click', function(){ viewer.setPanorama( basketball ); });
  entertainmentMap3.addEventListener('click', function(){ viewer.setPanorama( city ); });
  entertainmentMap4.addEventListener('click', function(){ viewer.setPanorama( dance ); });


  // baseball infospot
  const baseballMap = new PANOLENS.Infospot(200, mapImg());
  baseballMap.position.set(0, -500, 2000);
  baseballMap.addHoverText('防疫戰鬥營', 80);

  const baseballInfo = new PANOLENS.Infospot(200, infoImg());
  baseballInfo.position.set(1500, -500, 500);
  baseballInfo.addHoverText('防疫金臂人', 80);

  baseball.add(baseballInfo, baseballMap);
  showLoading(baseball, '防疫金臂人');

  baseballInfo.addEventListener('click', function(){
    modal.style.display = 'block';
    modalTitle.textContent = '防疫金臂人';
    modalText.textContent = '防疫戰士化身為棒球場上的投手，要依據線索，把知識化為力量，將球投入正確的位置。'
  });

  baseballMap.addEventListener('click', function(){ viewer.setPanorama(entertainment); });

  // hallway infospot
  const hallwayMap = new PANOLENS.Infospot(300, mapImg());
  hallwayMap.position.set(200, -800, -4000);
  hallwayMap.addHoverText('防疫戰鬥營', 80);

  hallway.add( hallwayMap );
  showLoading(hallway, '拱型走廊');

  hallwayMap.addEventListener('click', function(){ viewer.setPanorama( entertainment ); });

  // basketball infospot
  const basketballMap = new PANOLENS.Infospot(300, mapImg());
  basketballMap.position.set(1000, -800, -4000);
  basketballMap.addHoverText('防疫戰鬥營', 80);

  const basketballInfo = new PANOLENS.Infospot(800, infoImg());
  basketballInfo.position.set(1000, -500, 5000);
  basketballInfo.addHoverText('結核鬥牛賽', 80);

  basketball.add( basketballMap, basketballInfo );
  showLoading(basketball, '結核鬥牛賽');

  basketballMap.addEventListener('click', function(){ viewer.setPanorama( entertainment ); });

  basketballInfo.addEventListener('click', function(){
    modal.style.display = 'block';
    modalTitle.textContent = '結核鬥牛賽';
    modalText.textContent = '想要遠離結核病，適度運動、保持身體健康，非常重要。戰士們！來場籃球賽，看看誰輸誰贏！'
  });

  // city infospot
  const cityMap = new PANOLENS.Infospot(300, mapImg());
  cityMap.position.set(-3000, -800, 2000);
  cityMap.addHoverText('防疫戰鬥營', 80);

  const cityInfo = new PANOLENS.Infospot(800, infoImg());
  cityInfo.position.set(6000, -500, 0);
  cityInfo.addHoverText('慾望城市', 80);

  city.add( cityMap, cityInfo );
  showLoading(city, '慾望城市');

  cityMap.addEventListener('click', function(){ viewer.setPanorama( entertainment ); });

  cityInfo.addEventListener('click', function(){
    modal.style.display = 'block';
    modalTitle.textContent = '慾望城市';
    modalText.textContent = '慾望城市中充滿誘惑，每次擲出的骰子，將決定你的機會和命運，戰士們，請運用你的智慧與勇氣，通過考驗。'
  });

  // dance infospot
  const danceMap1 = new PANOLENS.Infospot(300, arrowImg());
  danceMap1.position.set(-5000, -800, 500);
  danceMap1.addHoverText('影視動畫區', 80);

  const danceMap2 = new PANOLENS.Infospot(300, mapImg());
  danceMap2.position.set(-1000, -500, 3000);
  danceMap2.addHoverText('防疫戰鬥營', 80);

  const danceInfo = new PANOLENS.Infospot(800, infoImg());
  danceInfo.position.set(5000, -500, -3000);
  danceInfo.addHoverText('防疫大擂台', 80);

  dance.add( danceMap1, danceMap2, danceInfo );
  showLoading(dance, '防疫大擂台');

  danceMap1.addEventListener('click', function(){ viewer.setPanorama( screen ); });
  danceMap2.addEventListener('click', function(){ viewer.setPanorama(entertainment); });
  danceInfo.addEventListener('click', function(){
    modal.style.display = 'block';
    modalTitle.textContent = '防疫大擂台';
    modalText.textContent = '經過了重重的考驗，戰士們想必都已具備了對抗各種病菌的十八般武藝了！最後來個總驗收，看看誰才是最優秀的防疫戰士。'
  });

  // screen infospot
  const screenMap1 = new PANOLENS.Infospot(100, arrowImg());
  screenMap1.position.set(600, -200, 1500);
  screenMap1.addHoverText('回大廳', 80);

  screen.add(screenMap1);
  showLoading(screen, '影視動畫區');
  screenMap1.addEventListener('click', function(){ viewer.setPanorama( lobby ); });

  // train infospot
  const trainMap1 = new PANOLENS.Infospot(100, arrowImg());
  trainMap1.position.set(900, -300, 1000);
  trainMap1.addHoverText('工業復甦－戰後復興時代', 80);

  const trainMap2 = new PANOLENS.Infospot(800, mapImg());
  trainMap2.position.set(-5000, -1200, -8000);
  trainMap2.addHoverText('大廳', 80);

  train.add(trainMap1, trainMap2);
  showLoading(train, '台灣工業的發展');
  trainMap1.addEventListener('click', function(){ viewer.setPanorama( train2 ); });
  trainMap2.addEventListener('click', function(){ viewer.setPanorama( lobby ); });

  // train2 infospot
  const train2Map1 = new PANOLENS.Infospot(100, mapImg());
  train2Map1.position.set(1200, -300, 500);
  train2Map1.addHoverText('工業復甦－戰後復興時代', 80);

  const train2Map2 = new PANOLENS.Infospot(200, arrowImg());
  train2Map2.position.set(0, -300, -1500);
  train2Map2.addHoverText('出口導向-製造王國萌芽的1960年代', 80);

  train2.add(train2Map1, train2Map2);
  showLoading(train2, '工業復甦－戰後復興時代');
  train2Map1.addEventListener('click', function(){ viewer.setPanorama( train ); });
  train2Map2.addEventListener('click', function(){ viewer.setPanorama( history ); });

  // history infospot
  const historyMap1 = new PANOLENS.Infospot(100, mapImg());
  historyMap1.position.set(-800, -300, 1200);
  historyMap1.addHoverText('出口導向-製造王國萌芽的1960年代', 80);

  const historyMap2 = new PANOLENS.Infospot(300, arrowImg());
  historyMap2.position.set(1200, -300, -2000);
  historyMap2.addHoverText('工業基礎設施再進化', 80);

  const historyInfo = new PANOLENS.Infospot(800, infoImg());
  historyInfo.position.set(-8000, -500, -5000);
  historyInfo.addHoverText('出口導向時期', 80);

  history.add(historyMap1, historyMap2, historyInfo);
  showLoading(history, '出口導向-製造王國萌芽的1960年代');
  historyMap1.addEventListener('click', function(){ viewer.setPanorama( train2 ); });

  historyMap2.addEventListener('click', function(){ viewer.setPanorama( history2 ); });

  historyInfo.addEventListener('click', function(){
    modal.style.display = 'block';
    modalTitle.textContent = '出口導向時期';
    modalText.innerHTML = '出口導向時期，又稱出口擴張時期，是指中華民國在1961年至1972年期間以擴張出口貿易為導向的工業化時期。<br/><br/>中華民國政府曾在1950年代推動進口替代工業化政策，但是由於國內市場飽合，使得以內銷為主要的產業開始面臨生產過剩的問題。為解決此一問題，中華民國政府開始採用出口貿易導向政策，增進臺灣經濟.'
  });

  // history infospot
  const history2Map1 = new PANOLENS.Infospot(150, arrowImg());
  history2Map1.position.set(-170, -250, 1200);
  history2Map1.addHoverText('工業轉型-民主開放的1980年代', 80);

  const history2Map2 = new PANOLENS.Infospot(200, mapImg());
  history2Map2.position.set(-2200, -600, -1500);
  history2Map2.addHoverText('工業基礎設施再進化', 80);

  history2.add(history2Map1, history2Map2);
  showLoading(history2, '工業基礎設施再進化');
  history2Map1.addEventListener('click', function(){ viewer.setPanorama(internet); });

  history2Map2.addEventListener('click', function(){ viewer.setPanorama( history ); });

  // internet infospot
  const internetMap1 = new PANOLENS.Infospot(250, mapImg());
  internetMap1.position.set(3500, -850, 2500);
  internetMap1.addHoverText('工業歷史發展', 80);

  const internetMap2 = new PANOLENS.Infospot(400, arrowImg());
  internetMap2.position.set(3000, -800, -3000);
  internetMap2.addHoverText('智慧科技時代', 80);

  internet.add(internetMap1, internetMap2);
  showLoading(internet, '工業轉型-民主開放的1980年代');
  internetMap1.addEventListener('click', function(){ viewer.setPanorama(history2); });

  internetMap2.addEventListener('click', function(){ viewer.setPanorama(internet2); });

  // internet infospot
  const internet2Map1 = new PANOLENS.Infospot(250, arrowImg());
  internet2Map1.position.set(1350, -450, 2000);
  internet2Map1.addHoverText('經濟奇蹟的尖兵', 80);

  const internet2Map2 = new PANOLENS.Infospot(400, mapImg());
  internet2Map2.position.set(-4700, -800, -5000);
  internet2Map2.addHoverText('工業轉型-民主開放的1980年代', 80);

  internet2.add(internet2Map1, internet2Map2);
  showLoading(internet2, '智慧科技時代');
  internet2Map1.addEventListener('click', function(){ viewer.setPanorama(racket); });

  internet2Map2.addEventListener('click', function(){ viewer.setPanorama(internet); });

  // racket infospot
  const racketMap1 = new PANOLENS.Infospot(250, arrowImg());
  racketMap1.position.set(-100, -350, 3000);
  racketMap1.addHoverText('鞋材的演進', 80);

  const racketMap3 = new PANOLENS.Infospot(350, mapImg());
  racketMap3.position.set(-4000, -950, 1500);
  racketMap3.addHoverText('光男的碳纖維傳奇', 80);

  const racketMap2 = new PANOLENS.Infospot(300, mapImg());
  racketMap2.position.set(-4300, -500, -800);
  racketMap2.addHoverText('智慧科技時代', 80);

  racket.add(racketMap1, racketMap2, racketMap3);
  showLoading(racket, '經濟奇蹟的尖兵');
  racketMap1.addEventListener('click', function(){ viewer.setPanorama(shose); });

  racketMap2.addEventListener('click', function(){ viewer.setPanorama(internet2); });

  racketMap3.addEventListener('click', function(){ viewer.setPanorama(racketMan); });

  // racketMan
  const racketManMap1 = new PANOLENS.Infospot(250, mapImg());
  racketManMap1.position.set(-1500, -450, 2000);
  racketManMap1.addHoverText('經濟奇蹟的尖兵', 80);

  const racketManInfo = new PANOLENS.Infospot(800, infoImg());
  racketManInfo.position.set(7000, -500, 1000);
  racketManInfo.addHoverText('光男的碳纖維傳奇', 80);

  racketMan.add(racketManMap1, racketManInfo);
  showLoading(racketMan, '光男的碳纖維傳奇');
  racketManMap1.addEventListener('click', function(){ viewer.setPanorama(racket); });
  racketManInfo.addEventListener('click', function(){
    modal.style.display = 'block';
    modalTitle.textContent = '光男的碳纖維傳奇';
    modalText.innerHTML = '台灣的網球拍產業，從民國50年代開始替國外代工木製的羽毛球拍開始，經歷鐵拍、鋁拍的階段。<br/><br/>1978年由光男公司從國外引進碳纖維複合材料，開始製造碳拍之後，短短的幾年間，不但淘汰了木製球拍，改變了世界網球拍的產銷結構，成為網球拍王國，而且奠定了台灣在全球複合材料加工技術上重要的地位。<br/><br/>在這個打造網球拍王國的過程中，從一開始因緣際會引進一些簡單的複合材料的加工概念，接著在一群技術英雄幾近土法煉鋼的努力開發下，發展出一套最具競爭力的滾筒纏繞法用以製造預浸布，再用獨創的吹氣熱壓成型的方式量產球拍，不但掌握了幾乎全球所有名牌的訂單，而且在品質上也獲得國際的肯定。'
  });

  // shose infospot
  const shoseMap1 = new PANOLENS.Infospot(250, arrowImg());
  shoseMap1.position.set(-1700, -550, 3000);
  shoseMap1.addHoverText('AI鞋匠-鞋子訂製', 80);

  const shoseMap2 = new PANOLENS.Infospot(500, mapImg());
  shoseMap2.position.set(-2000, -1500, -8000);
  shoseMap2.addHoverText('經濟奇蹟的尖兵', 80);

  shose.add(shoseMap1, shoseMap2, shoseMap2);
  showLoading(shose, '鞋材的演進');
  shoseMap1.addEventListener('click', function(){ viewer.setPanorama(shose2); });

  shoseMap2.addEventListener('click', function(){ viewer.setPanorama(racket); });

  // shose2 infospot
  const shose2Map1 = new PANOLENS.Infospot(250, arrowImg());
  shose2Map1.position.set(4000, -400, -800);
  shose2Map1.addHoverText('回大廳', 80);

  const shose2Map2 = new PANOLENS.Infospot(500, mapImg());
  shose2Map2.position.set(7000, -800, 5000);
  shose2Map2.addHoverText('鞋材的演進', 80);

  shose2.add(shose2Map1, shose2Map2);
  showLoading(shose2, 'AI鞋匠-鞋子訂製');
  shose2Map1.addEventListener('click', function(){ viewer.setPanorama(lobby); });

  shose2Map2.addEventListener('click', function(){ viewer.setPanorama(racket); });

  // star infospot
  const starMap1 = new PANOLENS.Infospot(400, arrowImg());
  starMap1.position.set(-450, -400, -4000);
  starMap1.addHoverText('時空航站', 80);

  const starMap2 = new PANOLENS.Infospot(400, mapImg());
  starMap2.position.set(-2800, -800, 3000);
  starMap2.addHoverText('大廳', 80);

  star.add(starMap1, starMap2);
  showLoading(star, '星際廣場');
  starMap1.addEventListener('click', function(){ viewer.setPanorama(space); });

  starMap2.addEventListener('click', function(){ viewer.setPanorama(lobby); });

  // space infospot
  const spaceMap1 = new PANOLENS.Infospot(500, arrowImg());
  spaceMap1.position.set(-5500, -400, -3500);
  spaceMap1.addHoverText('科技家居', 80);

  const spaceMap2 = new PANOLENS.Infospot(400, mapImg());
  spaceMap2.position.set(-2000, -500, 4000);
  spaceMap2.addHoverText('星際廣場', 80);

  space.add(spaceMap1, spaceMap2);
  showLoading(space, '時空航站');
  spaceMap1.addEventListener('click', function(){ viewer.setPanorama(light); });

  spaceMap2.addEventListener('click', function(){ viewer.setPanorama(star); });

  // light infospot
  const lightMap1 = new PANOLENS.Infospot(500, arrowImg());
  lightMap1.position.set(-5500, -400, -2000);
  lightMap1.addHoverText('回大廳', 80);

  const lightMap2 = new PANOLENS.Infospot(400, mapImg());
  lightMap2.position.set(-3000, -100, 4000);
  lightMap2.addHoverText('時空航站', 80);

  light.add(lightMap1, lightMap2);
  showLoading(light, '科技家居');
  lightMap1.addEventListener('click', function(){ viewer.setPanorama(lobby); });
  lightMap2.addEventListener('click', function(){ viewer.setPanorama(space); });

  // viewer
  const viewer = new PANOLENS.Viewer({ output: 'console', container: container, autoHideInfospot: false, autoRotate: true, autoRotateSpeed: 1});

  viewer.add( lobby, entertainment, dance, city, screen, basketball, hallway, baseball, train, train2, history, history2, internet, internet2, racket, racketMan, shose, shose2, star, space, light );
}

function showLoading(panolens, name) {
  panolens.addEventListener('progress', function(e){
    loading.style.display = "block";
    loadingText.textContent = name;
    setTimeout(() => {
      loading.style.display="none";
    }, 2000);
  });
}