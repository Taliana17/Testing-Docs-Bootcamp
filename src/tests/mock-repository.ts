/**
 * **mockRepository**
 *
 * Función auxiliar que genera un repositorio simulado (mock) para pruebas unitarias.
 * 
 * Utiliza `jest.fn()` para crear funciones espía de Jest, permitiendo
 * controlar y verificar las llamadas a los métodos típicos de un repositorio de TypeORM.
 *
 * @example
 * ```ts
 * const repository = mockRepository();
 * repository.find.mockResolvedValue([{ id: 1, name: 'Test' }]);
 * ```
 *
 * @returns {object} Un objeto que contiene los métodos `find`, `findOne`, `findOneBy`, `save`, `create`, `update` y `delete` simulados con `jest.fn()`.
 */
export const mockRepository = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  findOneBy: jest.fn(),
  save: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});
