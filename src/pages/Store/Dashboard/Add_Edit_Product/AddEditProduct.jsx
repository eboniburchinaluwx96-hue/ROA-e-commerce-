import { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FormCreation from "../../../../components/forms/FormCreation";

export default function AddEditProduct() {
  const [formData, setFormData] = useState({
    type: "",

    //step 2
    name: "",
    description: "",
    condition: "",
    keywords: [],

    //step 3
    category: "",
    gender: "",
    brand: "",
    origin: "",
    isOrganic: false,
    warrantyDuration: "",
    deliveryOptions: [],
    deliveryTime: "",

    //step 3b car
    listingMeta: {
      location: "",

      //vehicle fields
      make: "",
      model: "",
      year: "",
      mileage: "",
      transmission: "",
      fuel: "",
      color: "",
      bodyType: "",
      features: [],
      negotiable: false,
      contactMethod: [],

      //property fields
      listingType: "",
      propertyType: "",
      bedrooms: "",
      bathrooms: "",
      toilets: "",
      furnished: "",
      floor: "",
      sizeInSqm: "",
      amenities: [],
      address: "",
      hideExactAddress: false,
      agencyFee: "",
      cautionFee: "",
    },

    //step 4
    variants: {},

    //step 5
    price: "",
    oldPrice: "",
    costPrice: "",
    stock: "",
    lowStockAlert: 5,
    sku: "",

    //step 6
    images: [],

    //step 7
    status: "ACTIVE",
    scheduleAt: "",
  });
  const { id } = useParams();
  const isEditMode = Boolean(id);

  return (
    <section>
      <FormCreation
        formData={formData}
        setFormData={setFormData}
        getStore={false}
        isEditMode={isEditMode}
        title={isEditMode ? "Edit Product" : "Add Product"}
      />
    </section>
  );
}
