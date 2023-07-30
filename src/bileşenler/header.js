const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const div1 = document.createElement("div");
  div1.classList.add("header");

  const spanDate = document.createElement("span");
  spanDate.classList.add("date");
  spanDate.textContent = tarih;

  const h1baslik = document.createElement("h1");
  h1baslik.textContent = baslik;

  const spanYazi = document.createElement("span");
  spanYazi.classList.add("temp");
  spanYazi.textContent = yazi;

  div1.append(spanDate, h1baslik, spanYazi);
  return div1;
};

const headerEkleyici = (secici) => {
  const headerBileseni = document.querySelector(secici);

  const header1 = Header("Teknoloji Zamanı", "11 Kasım 2022", "sağdaki yazı");
  headerBileseni.appendChild(header1);

  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
};

export { Header, headerEkleyici };
