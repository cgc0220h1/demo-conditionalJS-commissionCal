function commissionCal() {
    let revenue = +document.getElementById("revenue-input").value;
        revenue = revenue / 10000000;
        alert(revenue);
    if (revenue < 2) {
        document.getElementById("result").innerText = 'Doanh thu của bạn chưa đủ để nhận được hoa hồng'
    } else if (revenue < 5) {
        let commission = revenue * 1.03;
        document.getElementById('result').innerText ="Doanh thu của bạn là: " + Math.floor(commission) + " VND"
    } else if (revenue < 10) {
        let commission = (5 - 2) * 10000000 * 1.03 + revenue * 1.05;
        document.getElementById('result').innerText ="Doanh thu của bạn là: " + Math.floor(commission) + " VND"
    } else {
        let commission = (5 -2) * 10000000 * 1.03 + (10 - 5)*1.05 + revenue * 1.1;
        document.getElementById('result').innerText ="Doanh thu của bạn là: " + Math.floor(commission) + " VND"
    }
}