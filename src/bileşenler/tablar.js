import axios from "axios";
import { response } from "msw";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  const divTopics = document.createElement("div");
  divTopics.classList.add("topics");

  konu.forEach((element) => {
    let divTab = document.createElement("div");
    divTab.classList.add("tab");
    divTab.textContent = element;
    divTopics.appendChild(divTab);
  });
  return divTopics;
};

// GÖREV 4
// ---------------------
// Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
// Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
// Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
// Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//{"konular":["javascript","bootstrap","teknoloji","jquery","node.js"]}

const tabEkleyici = (secici) => {
  axios.get("http://localhost:5001/api/konular").then((resp) => {
    const tabKonu = Tablar(resp.data.konular);
    const seciciTab = document.querySelector(secici);
    seciciTab.appendChild(tabKonu);
  });
};
export { Tablar, tabEkleyici };
