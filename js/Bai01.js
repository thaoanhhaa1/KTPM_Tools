const tinhBtn = document.getElementById('button-tinh');
const dongBtn = document.getElementById('button-dong');
const soCuInput = document.querySelector('.so-cu-txt');
const soMoiInput = document.querySelector('.so-moi-txt');
const invalidFeedback = document.querySelector('.invalid-feedback');
const thanhTienInput = document.getElementById('thanh-tien');
const hiddenInput = document.querySelector('input[type="hidden"]');

function reset() {
    hiddenInput.classList.remove('is-invalid');

    thanhTienInput.value = '';
}

soCuInput.addEventListener('focus', reset);
soMoiInput.addEventListener('focus', reset);

tinhBtn.addEventListener('click', () => {
    reset();

    const soCu = soCuInput.value.trim();
    const soMoi = soMoiInput.value.trim();

    if (!soCu) {
        hiddenInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Số cũ không được để trống';
        return;
    }

    if (!soMoi) {
        hiddenInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Số mới không được để trống';
        return;
    }

    if (Number.isNaN(+soCu)) {
        hiddenInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Số cũ phải là số';
        return;
    }

    if (Number.isNaN(+soMoi)) {
        hiddenInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Số mới phải là số';
        return;
    }

    if (!Number.isInteger(+soCu)) {
        hiddenInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Số cũ phải là số nguyên';
        return;
    }

    if (!Number.isInteger(+soMoi)) {
        hiddenInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Số mới phải là số nguyên';
        return;
    }

    if (+soCu < 0) {
        hiddenInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Số cũ phải là số nguyên dương';
        return;
    }

    if (+soMoi < 0) {
        hiddenInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Số mới phải là số nguyên dương';
        return;
    }

    if (+soCu > +soMoi) {
        hiddenInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Số cũ không được lớn hơn số mới';
        return;
    }

    const thanhTien = tinhThanhTien(soCu, soMoi);
    thanhTienInput.value = thanhTien;
});

dongBtn.addEventListener('click', () => {
    soCuInput.value = '';
    soMoiInput.value = '';
});

function tinhThanhTien(soCu, soMoi) {
    var thanhTien = 0;
    const bac = soMoi - soCu;
    switch (true) {
        case bac >= 0 && bac <= 50:
            thanhTien = bac * 1484 + 0.1 * bac * 1484;
            break;
        case bac >= 51 && bac <= 100:
            thanhTien =
                50 * 1484 +
                (bac - 50) * 1533 +
                0.1 * (50 * 1484 + (bac - 50) * 1533);
            break;
        case bac >= 101 && bac <= 200:
            thanhTien =
                50 * 1484 +
                50 * 1533 +
                (bac - 100) * 1786 +
                0.1 * (50 * 1484 + 50 * 1533 + (bac - 100) * 1786);
            break;
        case bac >= 201 && bac <= 300:
            thanhTien =
                50 * 1484 +
                50 * 1533 +
                100 * 1786 +
                (bac - 200) * 2242 +
                0.1 * (50 * 1484 + 50 * 1533 + 100 * 1786 + (bac - 200) * 2242);
            break;
        case bac >= 301 && bac <= 400:
            thanhTien =
                50 * 1484 +
                50 * 1533 +
                100 * 1786 +
                100 * 2242 +
                (bac - 300) * 2503 +
                0.1 *
                    (50 * 1484 +
                        50 * 1533 +
                        100 * 1786 +
                        100 * 2242 +
                        (bac - 300) * 2503);
            break;
        case bac >= 401:
            thanhTien =
                50 * 1484 +
                50 * 1533 +
                100 * 1786 +
                100 * 2242 +
                100 * 2503 +
                (bac - 400) * 2587 +
                0.1 *
                    (50 * 1484 +
                        50 * 1533 +
                        100 * 1786 +
                        100 * 2242 +
                        100 * 2503 +
                        (bac - 400) * 2587);
            break;
        default:
            return -1;
    }
    return thanhTien;
}
