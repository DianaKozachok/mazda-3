function shareSite() {
    if (navigator.share) {
        navigator.share({
            title: 'Mazda 3',
            text: '����������� ���� Mazda 3!',
            url: window.location.href // ������������� ������� ��������� �� ����
        }).then(() => {
            console.log('ĳ����� ������ ��������');
        }).catch((error) => {
            console.log('������� ������: ', error);
        });
    } else {
        alert('��� ������� �� ������� ��������� ���������.');
    }
}  