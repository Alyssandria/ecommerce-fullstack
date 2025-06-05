class ROUTES {
  protected readonly root: string

  constructor(root: string = "/loremipsum-ecommerce/api/v1") {
    this.root = root
  }

  protected createRoute(segment: string): string {
    return `${this.root}/${segment}`
  }
}

export class APIROUTES extends ROUTES {
  constructor() {
    super()
  }

  readonly AUTH = {
    LOGIN: `${this.createRoute("auth/login")}`,
    SIGNIN: `${this.createRoute("auth/signin")}`
  }
}


