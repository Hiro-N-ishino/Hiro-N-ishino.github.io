document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".main-content form");
  const emailInput = form.querySelector('input[name="email"]');

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

  if (form && emailInput) {
    form.addEventListener("submit", function (e) {
      const errorMsg = validateEmailCustom(emailInput.value.trim());

      if (errorMsg) {
        e.preventDefault();
        emailInput.setCustomValidity(errorMsg);
        emailInput.reportValidity();
        return;
      } else {
        emailInput.setCustomValidity("");
      }

      const confirmed = confirm("送信してもよろしいですか？");
      if (!confirmed) {
        e.preventDefault();
      }
    });

    emailInput.addEventListener("input", function () {
      emailInput.setCustomValidity("");
    });
  }
});
