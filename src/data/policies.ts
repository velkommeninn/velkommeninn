// To update this content later, edit this file.
// Update pet fees, pet rules, and policy summaries here.

export interface PetFeeRow {
  situation: string;
  fee: string;
}

// Pet fee schedule — update amounts here when fees change
export const petFees: PetFeeRow[] = [
  { situation: "1 dog · 1 night", fee: "$35" },
  { situation: "2 dogs · 1 night", fee: "$50" },
  { situation: "1 dog · 2 nights", fee: "$50" },
  { situation: "2 dogs · 2 nights", fee: "$60" },
];

// Full pet rules displayed on the Pet Policy page
export const petRules: string[] = [
  "Dogs are allowed only in designated pet-friendly rooms.",
  "Guests must notify the hotel in advance if bringing a dog.",
  "Dogs only. Cats and other pets are not permitted.",
  "Maximum 2 dogs per room.",
  "Pet fees apply and are collected at check-in.",
  "Dogs must be kept on a leash in all common areas.",
  "Guests are responsible for any pet-related damages.",
  "The 100% non-smoking policy applies in all pet-friendly rooms.",
];

// Summary bullets used on the Policies page
export const petPolicySummary: string[] = [
  "Dogs are allowed only in designated pet-friendly rooms.",
  "Guests must notify the hotel in advance if bringing a dog.",
  "Dogs only. Cats and other pets are not permitted.",
  "Maximum 2 dogs per room.",
  "Pet fees apply and are collected at check-in.",
  "Service animals as defined by the ADA are welcome at no additional charge.",
];
