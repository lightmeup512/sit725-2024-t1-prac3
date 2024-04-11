
const cardList = [
    {
        title: "Bentley",
        image: "images/bent2.jpg",
        link: "About Bentley",
        description: "Demo description about Bentley cars"
    },
    {
        title: "Royal Enfield",
        image: "images/royal.jpg",
        link: "About Royal Bikes",
        description: "Demo description about Royal Motorbike"
    },
    {
        title: "Bentley SuperCar",
        image: "images/bent3.jpg",
        link: "About Bentley Supercar",
        description: "Demo description about Bentley supercars"
    }
]

const addCards = (items) => {
    items.forEach(
        item => {
            let itemToAppend = '<div class="col s4 center-align">' +
                '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
                '</div><div class="card-content">' +
                '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' + '<div class="card-reveal">' +
                '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' + '<p class="card-text">' + item.description + '</p>' +
                '</div></div></div>';

            $("#card-section").append(itemToAppend)
        });
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);
}

const clickMe = () => {
    $('#modal1').modal('show');
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    })

    $('#clickMeButton').click(() => {
        clickMe();
    })

    addCards(cardList);
});
