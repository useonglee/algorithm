// TODO: LintCode - 1214번

function licenseKeyFormatting(S, K) {
  // 첫번째 그룹은 K보다 짧거나 같아야 한다. 나머지는 K 길이
  // 적어도 하나의 문자가 포함되어야 한다.
  // 모든 소문자들은 대문자로 변환해야 한다.
  
  S = S.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().split('');

  for (let i = S.length; i > 0; i = i - K) {
    // 맨 끝을 제외하고 대쉬를 붙힌다.
    if (i !== S.length) {
      S[i - 1] = S[i - 1] + "-";
    }
  }

  return S.join('');
}

console.log(licenseKeyFormatting("5F3Z32-2e-9-wabcd", 4));
//"5F-3Z32-2E9W-ABCD"

console.log(licenseKeyFormatting("2334-5g-3-J", 2));
// "23-34-5G-J3"

console.log(licenseKeyFormatting("--------EyRfCyHxyUJzhygiazYpjuDFdHvrnDwoQKQEsccLDiwhpmjueADIzqIvExbDDFnEGovAxYeszbzuTekRuWUPXRPbVKJuDQzIzzTj", 16));
// "EYRF-CYHXYUJZHYGIAZYP-JUDFDHVRNDWOQKQE-SCCLDIWHPMJUEADI-ZQIVEXBDDFNEGOVA-XYESZBZUTEKRUWUP-XRPBVKJUDQZIZZTJ"