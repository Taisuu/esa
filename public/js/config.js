const currency = "$"
const largeFineAmount = 1000
const smallFineAmount = 800

export const rewardList = [
  {
    "text": "Brawo, oto twój burgerek!",
    "result": "win"
  },
  {
    "text": "Gratulacje, za następny zestaw płacisz",
    "result": "fine",
    "amount": largeFineAmount,
    "currency": currency
  },
  {
    "text": "Niestety, brzuszek dalej głodny",
    "result": "lose"
  },
  {
    "text": "Głodny nie jesteś sobą, graj dalej",
    "result": "lose"
  }, 
  {
    "text": "Nie poddawaj się!",
    "result": "lose"
  },
  {
    "text": "Gratulacje, smacznych skrzydełek",
    "result": "win"
  },
  {
    "text": "Szczęście jest co raz bliżej",
    "result": "lose"
  },
  {
    "text": "Wygrana dalej czeka na ciebie",
    "result": "lose"
  }, 
  {
    "text": "Gratulacje, za następny zestaw płacisz",
    "result": "fine",
    "amount": smallFineAmount,
    "currency": currency
  }, 
  {
    "text": "Shake nalany, zaraz będzie podany",
    "result": "win"
  },
  {
    "text": "Co zawiodło?",
    "result": "lose"
  },
  {
    "text": "Spragniony, o to twoja E-Cola!",
    "result": "win"
  },
  {
    "text": "Zakręciłeś za mocno i koło się zepsuło",
    "result": "broken"
  },
]

