/* Thêm sản phẩm vào giỏ hàng */
const btn = document.querySelectorAll(" button");
btn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    {
      var btnItem = event.target;
      var product = btnItem.parentElement;
      var productImg = product.querySelector("img").src;
      var productName = product.querySelector("p").textContent;
      var productPrice = product.querySelector("h4 span").textContent;
      addgiohang(productImg, productName, productPrice);
      alert("Đã thêm vào giỏ hàng");
    }
  });
});

function addgiohang(productImg, productName, productPrice) {
  var addtr = document.createElement("tr");
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".tensp");
    if (productT[i].innerHTML == productName) {
      alert("Sản phẩm đã tồn tại trong giỏ hàng");
      return;
    }
  }
  var trcontent =
    '<tr><td style="display: flex; align-items: center;"><img style="width: 100px;" src="' +
    productImg +
    '" alt=""><span class="tensp">' +
    productName +
    "</span></td><td><h4><span>" +
    productPrice +
    '</span><sup>đ</sup></h4></td><td><input style="width: 30px; height: 30px; outline: none;" type="number" name="" id="" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>';
  addtr.innerHTML = trcontent;
  var cartTable = document.querySelector("tbody");
  cartTable.append(addtr);

  thanhtien();
  deleteCart();
}

/* Tính thành tiền của tất cả sản phẩm */

function thanhtien() {
  var cartItem = document.querySelectorAll("tbody tr");
  var totalB = 0;
  for (var i = 0; i < cartItem.length; i++) {
    var inputValue = cartItem[i].querySelector("input").value;
    console.log(inputValue);
    var productPrice = cartItem[i].querySelector("h4 span").innerHTML;
    console.log(productPrice);
    totalA = inputValue * productPrice * 1000;
    totalB += totalA;
  }
  var cartTotalA = document.querySelector(".price-total span");
  var giasp = document.querySelector(".cart span");
  cartTotalA.innerHTML = totalB.toLocaleString("de-DE");
  giasp.innerHTML = totalB.toLocaleString("de-DE");
  tgsanpham();
}

/* Xóa sản phẩm trong giỏ hàng */
function deleteCart() {
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".cart-delete");
    productT[i].addEventListener("click", function (event) {
      var cartDelete = event.target;
      var cartDeleteItem = cartDelete.parentElement.parentElement;
      cartDeleteItem.remove();
      thanhtien();
      alert("Xóa sản phẩm thành công");
    });
  }
}

/* Tăng giảm số lượng sản phẩm */
function tgsanpham() {
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var tgInput = cartItem[i].querySelector("input");
    tgInput.addEventListener("change", function () {
      thanhtien();
    });
  }
}

const cartbtn = document.querySelector(".bx-x");
const cartshow = document.querySelector(".bxs-cart-alt");
cartbtn.addEventListener("click", function () {
  document.querySelector(".giohang").style.right = "-100%";
});
cartshow.addEventListener("click", function () {
  document.querySelector(".giohang").style.right = "0%";
});

/* Thanh toán xóa sản phẩm trong giỏ hàng */
const checkoutButton = document.querySelector(".thanhtoan");

/* Hàm để xóa các sản phẩm trong giỏ hàng */
function clearCart() {
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    cartItem[i].remove();
  }
}

/* Hàm để kiểm tra giỏ hàng có trống hay không */
function isCartEmpty() {
  var cartItems = document.querySelectorAll("tbody tr");
  return cartItems.length === 0;
}

checkoutButton.addEventListener("click", function () {
  if (isCartEmpty()) {
    alert("Vui lòng chọn ít nhất một sản phẩm có trong giỏ hàng!");
  } else {
    alert("Đã thanh toán thành công!");
    clearCart();
    thanhtien();
  }
});

/* Đăng nhập */
function kiemtra() {
  var ht = window.document.dangky.txthoten.value;
  var na = window.document.dangky.nam.value;
  var email = window.document.dangky.em.value;
  var tdn = window.document.dangky.tdn.value;
  var mk = window.document.dangky.mk.value;
  var nlmk = window.document.dangky.nlmk.value;
  if (ht.length == 0) {
    alert("Vui lòng nhập họ tên");
    window.document.dangky.txthoten.focus();
    return false;
  }
  if (na.length == 0) {
    alert("Hãy điền năm sinh");
    window.document.dangky.nam.focus();
    return false;
  }
  if (isNaN(na) == true) {
    alert("Đây không phải là số");
    window.document.dangky.nam.value = "";
    document.dangky.nam.focus();
    return false;
  }
  re = /\w+@\w+\.\w+/;

  if (email == "") {
    alert("Bạn chưa nhập email");
    window.document.dangky.em.value = "";
    document.dangky.em.focus();
    return false;
  } else if (re.test(email) == false) {
    alert("Email không đúng định dạng!");
    document.dangky.em.focus();
    return false;
  }
  if (tdn.length == 0) {
    alert("Hãy điền tên đăng nhập");
    window.document.dangky.tdn.focus();
    return false;
  }
  if (mk.length == 0) {
    alert("Hãy nhập mật khẩu");
    window.document.dangky.mk.focus();
    return false;
  }
  if (nlmk.length == 0) {
    alert("Hãy nhập lại mật khẩu");
    window.document.dangky.nlmk.focus();
    return false;
  }
  if (mk != nlmk) {
    alert("Mật khẩu và nhập lại mật khẩu ko trùng nhau");
    window.document.dangky.nlmk.focus();
    return false;
  }
  alert("Đăng ký thành công!");
  return turn;
}

/* Thanh toán */
document.getElementById("checkout-form");
document.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (name && address && email && phone) {
    document.getElementById("confirmation-message").classList.remove("hidden");
    clearCart();
    thanhtien();
  }else {
    alert("Vui lòng điền đầy đủ thông tin");
  }
});
