function getData() {
        //const elem = document.getElementById("ftcdisp")

       const header = new Headers();

       header.append('Authorization', 'Basic YWJoaWxhc2hzdW5rYXJhOkRCQkVEODE0LTdGNkQtNEVCNi1CMzhBLUUxRjU1RjMyNTJFNg==')

        fetch('http://ftc-api.firstinspires.org/v2.0/2021?key', {method : 'GET', headers: header})
            .then((response) => response.json())
            .then((data) => console.log(data));
}

getData()