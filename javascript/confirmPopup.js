document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".main-content form");
  const emailInput = form.querySelector('input[name="email"]');

  // バリデーション関数
  function validateEmailCustom(email) {
    if (!email) return "メールアドレスは必須です。";
    if (email.length >= 255) return "メールアドレスは255文字未満で入力してください。";
    if (!email.includes("@")) return "アドレスが不正です。";
    const forbiddenChars = /[\s,;　]/;
    if (forbiddenChars.test(email)) return "アドレスに禁止文字が含まれています。";
    const parts = email.split("@");
    if (parts.length !== 2) return "アドレスが不正です。（メールアドレスは1件のみ入力ください）";
    if (!parts[1].includes(".")) return "アドレスが不正です。";
    return "";
  }

  // モーダル要素
  const modal = document.querySelector(".custom-confirm-modal");
  const btnYes = modal.querySelector("#modal-yes");
  const btnNo = modal.querySelector("#modal-no");

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
