import { Uuid } from "../../../shared/domain/value-objects/uuid"
import { Category } from "../category.entity"

describe('Category Unit Tests', () => {

  describe('constructor', () => {
    test('should create a category with default values', () => {
      const category = new Category({
        name: 'Movie'
      })
      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe('Movie')
      expect(category.description).toBeNull()
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBeInstanceOf(Date)
    })

    test('should create a category with just name and description with create command', () => {
      const category = Category.create({
        name: 'Movie',
        description: 'Movie description',
      })
      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe('Movie')
      expect(category.description).toBe('Movie description')
    })

    test('should create a category with all values', () => {
      const created_at = new Date()
      const category = new Category({
        name: 'Movie',
        description: 'Movie description',
        is_active: false,
        created_at
      })
      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe('Movie')
      expect(category.description).toBe('Movie description')
      expect(category.is_active).toBeFalsy()
      expect(category.created_at).toBeInstanceOf(Date)
    })

    
  })
  
  describe('category_id field', () => {
    const arrange = [{category_id: null}, {category_id: undefined}, {category_id: new Uuid()}]
      test.each(arrange)('id = %j', ({ category_id}) => {
        const category = new Category({
          name: 'Movie',
          category_id: category_id as any
        })
        expect(category.category_id).toBeInstanceOf(Uuid)
        // if (category_id instaceof Uuid) {
        //   expect(category.category_id).toBe(category_id)
        // }
      })
  })

  describe('changes', () => {
    test('should change name', () => {
      const category = new Category({
        name: 'Movie',
        description: 'Movie description',
        is_active: false,
        created_at: new Date()
      })
      category.changeName('Serie')
      expect(category.name).toBe('Serie')
    })
    
    test('should change description', () => {
      const category = new Category({
        name: 'Movie',
        description: 'Movie description',
        is_active: false,
        created_at: new Date()
      })
      category.changeDescription('Serie description')
      expect(category.description).toBe('Serie description')
    })

    test('should activete', () => {
      const category = new Category({
        name: 'Movie',
        description: 'Movie description',
        is_active: false,
        created_at: new Date()
      })
      category.activate()
      expect(category.is_active).toBeTruthy()
    })
    
    test('should deactivate', () => {
      const category = new Category({
        name: 'Movie',
        description: 'Movie description',
        is_active: true,
        created_at: new Date()
      })
      category.deactivate()
      expect(category.is_active).toBeFalsy()
    })
  })

})