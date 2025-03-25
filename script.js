document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll('.tab');
  const searchFields = document.getElementById('search-fields');

  const fieldTemplates = {
    video: `
     <div class="form-group">
        <select id="tourism-country">
          <option value="" disabled selected>Ülke Seçiniz</option>
          <option value="Türkiye">Türkiye</option>
          <option value="Meksika">Meksika</option>
          <option value="Brezilya">Brezilya</option>
          <option value="Singapur">Singapur</option>
          <option value="Tayland">Tayland</option>
          <option value="Hindistan">Hindistan</option>
        </select>
      </div>
      <div class="form-group">
        <select id="tourism-city">
          <option value="">Önce ülke seçiniz</option>
        </select>
      </div>
      <div class="form-group">
        <select id="tourism-specialty">
          <option value="" disabled selected>Uzmanlık Alanı Seçiniz</option>
          <option>Estetik Cerrahi</option>
          <option>Diş Sağlığı</option>
          <option>Göz Tedavisi</option>
          <option>Ortopedi</option>
          <option>Saç Ekimi</option>
          <option>Kalp Cerrahisi</option>
          <option>Obezite Cerrahisi</option>
          <option>İnfertilite Tedavisi</option>
          <option>Fizik Tedavi ve Rehabilitasyon</option>
        </select>
      </div>
    `,
    appointment: `
      <div class="form-group">
        <select id="tourism-country">
          <option value="" disabled selected>Ülke Seçiniz</option>
          <option value="Türkiye">Türkiye</option>
          <option value="Meksika">Meksika</option>
          <option value="Brezilya">Brezilya</option>
          <option value="Singapur">Singapur</option>
          <option value="Tayland">Tayland</option>
          <option value="Hindistan">Hindistan</option>
        </select>
      </div>
      <div class="form-group">
        <select id="tourism-city">
          <option value="">Önce ülke seçiniz</option>
        </select>
      </div>
      <div class="form-group">
        <select id="tourism-specialty">
          <option value="" disabled selected>Uzmanlık Alanı Seçiniz</option>
          <option>Estetik Cerrahi</option>
          <option>Diş Sağlığı</option>
          <option>Göz Tedavisi</option>
          <option>Ortopedi</option>
          <option>Saç Ekimi</option>
          <option>Kalp Cerrahisi</option>
          <option>Obezite Cerrahisi</option>
          <option>İnfertilite Tedavisi</option>
          <option>Fizik Tedavi ve Rehabilitasyon</option>
        </select>
      </div>
    `,
    tourism: `
      <div class="form-group">
        <select id="tourism-country">
          <option value="" disabled selected>Ülke Seçiniz</option>
          <option value="Türkiye">Türkiye</option>
          <option value="Meksika">Meksika</option>
          <option value="Brezilya">Brezilya</option>
          <option value="Singapur">Singapur</option>
          <option value="Tayland">Tayland</option>
          <option value="Hindistan">Hindistan</option>
        </select>
      </div>
      <div class="form-group">
        <select id="tourism-city">
          <option value="">Önce ülke seçiniz</option>
        </select>
      </div>
      <div class="form-group">
        <select id="tourism-specialty">
          <option value="" disabled selected>Uzmanlık Alanı Seçiniz</option>
          <option>Estetik Cerrahi</option>
          <option>Diş Sağlığı</option>
          <option>Göz Tedavisi</option>
          <option>Ortopedi</option>
          <option>Saç Ekimi</option>
          <option>Kalp Cerrahisi</option>
          <option>Obezite Cerrahisi</option>
          <option>İnfertilite Tedavisi</option>
          <option>Fizik Tedavi ve Rehabilitasyon</option>
        </select>
      </div>
    `
  };

  function updateFields(type) {
    searchFields.innerHTML = fieldTemplates[type];
    if (type === 'tourism') {
      setupTourismCityListener();
    }
  }

  updateFields('video');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const type = this.getAttribute('data-type');
      updateFields(type);
    });
  });

  const countryCards = document.querySelectorAll('.country-card');
  countryCards.forEach(card => {
    card.addEventListener('click', function() {
      alert(this.dataset.country + " seçildi!");
    });
  });

  const countryButtons = document.querySelectorAll('.country-btn');
  countryButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert(this.getAttribute('data-country') + " seçildi!");
    });
  });

  const countryToCities = {
    "Türkiye": ["İstanbul", "Ankara", "İzmir", "Antalya", "Bursa"],
    "Meksika": ["Mexico City", "Cancun", "Guadalajara", "Monterrey"],
    "Brezilya": ["Sao Paulo", "Rio de Janeiro", "Brasilia"],
    "Singapur": ["Merkez Bölgesi"],
    "Tayland": ["Bangkok", "Chiang Mai", "Phuket"],
    "Hindistan": ["Yeni Delhi", "Mumbai", "Bangalore", "Chennai"]
  };

  function setupTourismCityListener() {
    const tourismCountrySelect = document.getElementById("tourism-country");
    const tourismCitySelect = document.getElementById("tourism-city");
    if (tourismCountrySelect) {
      tourismCountrySelect.addEventListener("change", function() {
        const selectedCountry = this.value;
        const cities = countryToCities[selectedCountry] || [];
        tourismCitySelect.innerHTML = `<option value="">Şehir Seçiniz</option>`;
        cities.forEach(city => {
          tourismCitySelect.innerHTML += `<option value="${city}">${city}</option>`;
        });
      });
    }
  }
});
