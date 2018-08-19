# REST API

## Create a REST controller from an entity (simple model)

### Create the entity

```sh
foal g entity flight
```

### Create the resource collection

```sh
foal g service flight
> EntityResourceCollection
```

### Create the controller

```sh
foal g controller flight
> REST
```

### Register the controller within a module

```typescript
...

@Module()
export class AppModule implements IModule {
  controllers = [
    controller('/flights', FlightController),
  ];
}
```

## Create a REST controller from another resource collection

- `POST /` -> service.create(...)
- `GET /` -> service.find(...)
- `GET /:id` -> service.findById(...)
- `PATCH /:id` -> service.modifyById(...)
- `PUT /:id` -> service.updateById(...)
- `DELETE /:id` -> service.deleteById(...)

```typescript
// ./services/train.service.ts
import { IResourceCollection, Service } from '@foal/core';

export interface Train {
  id: string
  name: string;
}

@Service()
export class TrainService implements Partial<IResourceCollection> {
  private id = 0;

  create(user, data: Partial<Train>, params): Train {
    this.id++;
    return { ...data, id: this.id };
  }

  // Other methods are available.
}
```
