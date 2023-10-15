export function CardContacts() {
  return (
    <>
      <div className="card">
        <h3 className="card__title">Contacts</h3>
        <div className="contacts">
          <div>
            <p className="contacts__title">ИП "Иванов Иван Иванович"</p>
            <p className="contacts__title">phone: 7(999)999-99-99</p>
            <p className="contacts__title">email: support@mail.ru</p>
            <p className="contacts__title">telegram: @support</p>
          </div>
          <div className="contacts__map">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6058.456217023672!2d30.3114074790225!3d59.939686631851856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310b32cbe2e9%3A0x74e032aa0505dfc!2z0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCt0YDQvNC40YLQsNC2!5e0!3m2!1sru!2sil!4v1691184540503!5m2!1sru!2sil"
              width="400"
              height="400"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
        </div>
      </div>
    </>
  );
}
