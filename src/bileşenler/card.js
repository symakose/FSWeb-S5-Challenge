import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const divHeadline = document.createElement("div");
  divHeadline.classList.add("headline");
  divHeadline.textContent = makale.anabaslik;
  divCard.appendChild(divHeadline);

  const divAuthor = document.createElement("div");
  divAuthor.classList.add("author");

  const divImg = document.createElement("div");
  divImg.classList.add("img-container");
  // img-container div'i içinde src=yazarFoto'yu ekle, ana divin appenchild'ı olacak.
  const imgEkle = document.createElement("img");
  imgEkle.src = makale.yazarFoto;
  divImg.appendChild(imgEkle);
  divAuthor.appendChild(divImg);

  const span1 = document.createElement("span");
  span1.textContent = `${makale.yazarAdi} tarafından`;

  divAuthor.appendChild(span1);
  divCard.appendChild(divAuthor);

  // click event ekleyici ekle.
  divCard.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });
  return divCard;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun. (for döngüsü ve for each)
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin. (queryselector ile yakala)
  //
  axios.get("http://localhost:5001/api/makaleler").then((resp) => {
    console.log(resp.data.makaleler);
    for (let i in resp.data.makaleler) {
      resp.data.makaleler[i].forEach((element) => {
        let result = Card(element);
        document.querySelector(secici).appendChild(result);
      });
    }
  });
};
export { Card, cardEkleyici };
