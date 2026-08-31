# Signal Blue — поставување на GitHub Pages

Овој пакет е подготвен од најновата зачувана верзија на Signal Blue (верзија 12 од 30 август 2026). Дизајнот и содржината се зачувани. Направени се само deployment промени за статички GitHub Pages build.

## 1. Ставете ги фајловите на GitHub

1. Направете нов GitHub repository.
2. Отпакувајте го ZIP пакетот.
3. Upload-ирајте ја **содржината** од папката, така што `package.json`, `app` и `.github` ќе бидат директно во root на repository-то.
4. Commit-ирајте ги фајловите на гранката `main`.

## 2. Вклучете GitHub Pages

1. Отворете `Settings` → `Pages`.
2. Кај `Build and deployment` изберете `GitHub Actions`.
3. Отворете го табот `Actions` и почекајте workflow-от **Deploy Signal Blue to GitHub Pages** да заврши успешно.
4. Прво проверете ја GitHub Pages адресата. DNS-от за `signalblue.mk` сè уште не го менувајте.

## 3. Поврзете го доменот дури по успешната проверка

1. Во `Settings` → `Pages`, внесете `signalblue.mk` во `Custom domain` и зачувајте.
2. Потоа во Zemi.mk променете ги DNS записите според точните вредности што ќе ги даде GitHub.
3. По додавањето на custom domain, пуштете го workflow-от уште еднаш преку `Actions` → `Deploy Signal Blue to GitHub Pages` → `Run workflow`.
4. Кога GitHub ќе го дозволи, вклучете `Enforce HTTPS`.

Не додавајте или менувајте `CNAME` фајл во овој проект. При deployment преку GitHub Actions, custom domain се поставува во GitHub Pages settings.
