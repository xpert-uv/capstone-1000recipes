BASE_API = "http://localhost:5000"

$('#search').hide();

$('#btn-search').on("click", searchWine);

async function searchWine() {

    const wine = $("#wine").val();
    const response = await axios.get(`${BASE_API}/searchwine/${wine}`);
    console.log(response);
    $('#search').show();
    $('#search').trigger('reset');
    for (let w_data of response.data.wines) {
        let wine = $(generateWineHTML(w_data));
        $("#result").append(wine)
    }
    //setInterval(recipeDeatils, 1000);
    // $("#result").append("<script src='../static/recipeDetails.js'></script>")

}

function generateWineHTML(wine) {
    return `<div class="col-sm-4">
             <div class="card mt-3" style:witdh=100px;>
            <img src="${wine.image}" class="card-img-top" alt="...">
            <div class="card-body text-dark">
            <ul>
            <li>${wine.title}</li>
             <li>${wine.price}</li>
            <li>Info:<br>${wine.description}</li>
            </ul>
            <a id="view-btn" type="button" class="btn btn-danger view-btn" href='${BASE_API}/recipedetail/${wine.id}' data-id=${wine.id}>View</a>
            </div>
            </div>
            </div>`;
}

