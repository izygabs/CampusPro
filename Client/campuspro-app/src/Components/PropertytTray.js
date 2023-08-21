const PropertyTray = () => {
  return (
    <div className="property-tray">
      <div className="db-createProperty">
        <h5>Properties</h5>
        <button>+ Create Property</button>
      </div>
      <section className="db-operators">
        <div className="db-operator-btns">
          <button>All Properties</button>
          <button>New</button>
          <button>Editing</button>
          <button>Published</button>
          <button>Unpublished</button>
        </div>
        <div className="db-properties-filter">
          <input type="search" placeholder="Search by name or address..." />
        </div>
      </section>
      <section className="db-display-properties"></section>
    </div>
  );
};
export default PropertyTray;
