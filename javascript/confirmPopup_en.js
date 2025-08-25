document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".main-content form");
  const emailInput = form.querySelector('input[name="email"]');

  // バリデーション関数
  function validateEmailCustom(email) {
    if (!email) return "Email address is required.";
    if (email.length >= 255) return "Please enter an email address with fewer than 255 characters.";
    if (!email.includes("@")) return "The email address is invalid.";
    const forbiddenChars = /[\s,;　]/;
    if (forbiddenChars.test(email)) return "The email address contains prohibited characters.";
    const parts = email.split("@");
    if (parts.length !== 2) return "The email address is invalid. (Please enter only one email address.)";
    if (!parts[1].includes(".")) return "The email address is invalid.";
    return "";
  }

  // モーダル要素
  const modal = document.querySelector(".custom-confirm-modal");
  const btnYes = modal.querySelector("#modal-yes");
  const btnNo = modal.querySelector("#modal-no");
  window.onload = function() {
    btnYes.textContent = 'Yes';
    btnNo.textContent = 'Cancel';
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const errorMsg = validateEmailCustom(emailInput.value.trim());

    if (errorMsg) {
      emailInput.setCustomValidity(errorMsg);
      emailInput.reportValidity();
      return;
    } else {
      emailInput.setCustomValidity("");
    }

    // モーダル表示
    modal.style.display = "block";

    // 「はい」ボタン押下時にフォーム送信を続行
    btnYes.onclick = function () {
      modal.style.display = "none";
      form.submit();
    };

    // 「キャンセル」ボタン押下時にモーダル閉じる
    btnNo.onclick = function () {
      modal.style.display = "none";
    };
  });

  // 入力変更でバリデーションリセット
  emailInput.addEventListener("input", function () {
    emailInput.setCustomValidity("");
  });
});
