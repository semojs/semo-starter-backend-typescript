import assert = require('assert') // For power-assert working well, must use this style
import { suite, test } from '@testdeck/mocha'
import '@testdeck/di-typedi'
import { Inject } from 'typedi'
import DemoService from '../../src/service/DemoService'

@suite
export class DemoServiceTest {

  @Inject()
  private demoService: DemoService

  @test
  demoMethod() {
    assert(this.demoService.demoMethod(1, 2) === 4)
  }
}
