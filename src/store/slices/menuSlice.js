import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menuData: [
      {
        id: 0,
        name: 'Пицца плюс',
        image: 'image1',
        assortiment: [
          {
            id: 0,
            name: 'Ролл угорь стандарт',
            image: 'imageAssortiment1',
            description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            disabled: false,
            price: 250
          },
          {
            id: 1,
            name: 'Калифорния лосось стандарт',
            image: 'imageAssortiment2',
            description:
              'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            disabled: false,
            price: 395
          },
          {
            id: 2,
            name: 'Окинава стандарт',
            image: 'imageAssortiment3',
            description:
              ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            disabled: false,
            price: 250
          },
          {
            id: 3,
            name: 'Цезарь маки хl',
            image: 'imageAssortiment4',
            description:
              'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            disabled: false,
            price: 250
          },
          {
            id: 4,
            name: 'Ясай маки стандарт 185 г',
            image: 'imageAssortiment5',
            description:
              'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            disabled: false,
            price: 250
          },
          {
            id: 5,
            name: 'Ролл с креветкой стандарт',
            image: 'imageAssortiment6',
            description:
              'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            disabled: false,
            price: 250
          }
        ]
      },
      {
        id: 1,
        name: 'Тануки',
        image: 'image2',
        assortiment: [
          {
            id: 0,
            name: 'Ролл угорь стандарт',
            image: 'imageAssortiment1',
            description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            disabled: false,
            price: 250
          },
          {
            id: 1,
            name: 'Калифорния лосось стандарт',
            image: 'imageAssortiment2',
            description:
              'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            disabled: false,
            price: 395
          },
          {
            id: 2,
            name: 'Окинава стандарт',
            image: 'imageAssortiment3',
            description:
              ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            disabled: false,
            price: 250
          },
          {
            id: 3,
            name: 'Цезарь маки хl',
            image: 'imageAssortiment4',
            description:
              'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            disabled: false,
            price: 250
          },
          {
            id: 4,
            name: 'Ясай маки стандарт 185 г',
            image: 'imageAssortiment5',
            description:
              'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            disabled: false,
            price: 250
          },
          {
            id: 5,
            name: 'Ролл с креветкой стандарт',
            image: 'imageAssortiment6',
            description:
              'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            disabled: false,
            price: 250
          }
        ]
      },
      {
        id: 2,
        name: 'FoodBand',
        image: 'image3',
        assortiment: [
          {
            id: 0,
            name: 'Ролл угорь стандарт',
            image: 'imageAssortiment1',
            description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            disabled: false,
            price: 250
          },
          {
            id: 1,
            name: 'Калифорния лосось стандарт',
            image: 'imageAssortiment2',
            description:
              'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            disabled: false,
            price: 395
          },
          {
            id: 2,
            name: 'Окинава стандарт',
            image: 'imageAssortiment3',
            description:
              ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            disabled: false,
            price: 250
          },
          {
            id: 3,
            name: 'Цезарь маки хl',
            image: 'imageAssortiment4',
            description:
              'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            disabled: false,
            price: 250
          },
          {
            id: 4,
            name: 'Ясай маки стандарт 185 г',
            image: 'imageAssortiment5',
            description:
              'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            disabled: false,
            price: 250
          },
          {
            id: 5,
            name: 'Ролл с креветкой стандарт',
            image: 'imageAssortiment6',
            description:
              'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            disabled: false,
            price: 250
          }
        ]
      },
      {
        id: 3,
        name: 'Жадина-пицца',
        image: 'image4',
        assortiment: [
          {
            id: 0,
            name: 'Ролл угорь стандарт',
            image: 'imageAssortiment1',
            description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            disabled: false,
            price: 250
          },
          {
            id: 1,
            name: 'Калифорния лосось стандарт',
            image: 'imageAssortiment2',
            description:
              'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            disabled: false,
            price: 395
          },
          {
            id: 2,
            name: 'Окинава стандарт',
            image: 'imageAssortiment3',
            description:
              ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            disabled: false,
            price: 250
          },
          {
            id: 3,
            name: 'Цезарь маки хl',
            image: 'imageAssortiment4',
            description:
              'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            disabled: false,
            price: 250
          },
          {
            id: 4,
            name: 'Ясай маки стандарт 185 г',
            image: 'imageAssortiment5',
            description:
              'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            disabled: false,
            price: 250
          },
          {
            id: 5,
            name: 'Ролл с креветкой стандарт',
            image: 'imageAssortiment6',
            description:
              'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            disabled: false,
            price: 250
          }
        ]
      },
      {
        id: 4,
        name: 'Точка еды',
        image: 'image5',
        assortiment: [
          {
            id: 0,
            name: 'Ролл угорь стандарт',
            image: 'imageAssortiment1',
            description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            disabled: false,
            price: 250
          },
          {
            id: 1,
            name: 'Калифорния лосось стандарт',
            image: 'imageAssortiment2',
            description:
              'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            disabled: false,
            price: 395
          },
          {
            id: 2,
            name: 'Окинава стандарт',
            image: 'imageAssortiment3',
            description:
              ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            disabled: false,
            price: 250
          },
          {
            id: 3,
            name: 'Цезарь маки хl',
            image: 'imageAssortiment4',
            description:
              'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            disabled: false,
            price: 250
          },
          {
            id: 4,
            name: 'Ясай маки стандарт 185 г',
            image: 'imageAssortiment5',
            description:
              'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            disabled: false,
            price: 250
          },
          {
            id: 5,
            name: 'Ролл с креветкой стандарт',
            image: 'imageAssortiment6',
            description:
              'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            disabled: false,
            price: 250
          }
        ]
      },
      {
        id: 5,
        name: 'PizzaBurger',
        image: 'image6',
        assortiment: [
          {
            id: 0,
            name: 'Ролл угорь стандарт',
            image: 'imageAssortiment1',
            description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            disabled: false,
            price: 250
          },
          {
            id: 1,
            name: 'Калифорния лосось стандарт',
            image: 'imageAssortiment2',
            description:
              'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            disabled: false,
            price: 395
          },
          {
            id: 2,
            name: 'Окинава стандарт',
            image: 'imageAssortiment3',
            description:
              ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            disabled: false,
            price: 250
          },
          {
            id: 3,
            name: 'Цезарь маки хl',
            image: 'imageAssortiment4',
            description:
              'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            disabled: false,
            price: 250
          },
          {
            id: 4,
            name: 'Ясай маки стандарт 185 г',
            image: 'imageAssortiment5',
            description:
              'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            disabled: false,
            price: 250
          },
          {
            id: 5,
            name: 'Ролл с креветкой стандарт',
            image: 'imageAssortiment6',
            description:
              'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            disabled: false,
            price: 250
          }
        ]
      }
    ]
  },
  reducers: {
    updateMenu (state, action) {
      const { id, foodId, updatedData } = action.payload
      state.menuData[id].assortiment[foodId] = {
        ...state.menuData[id].assortiment[foodId],
        ...updatedData
      }
    },
    clearDisabled (state) {
      state.menuData.forEach(menu => {
        menu.assortiment = menu.assortiment.map(item => ({
          ...item,
          disabled: false
        }))
      })
    }
  }
})

const { reducer, actions } = menuSlice

export const { updateMenu, clearDisabled } = actions

export default reducer
