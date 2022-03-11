import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CrmService } from './crm.service';
import { CreateCrmDto } from './dto/create-crm.dto';
import { UpdateCrmDto } from './dto/update-crm.dto';

@Controller()
export class CrmController {
  constructor(private readonly crmService: CrmService) {}

  @MessagePattern('createCrm')
  create(@Payload() createCrmDto: CreateCrmDto) {
    return this.crmService.create(createCrmDto);
  }

  @MessagePattern('findAllCrm')
  findAll() {
    return this.crmService.findAll();
  }

  @MessagePattern('findOneCrm')
  findOne(@Payload() id: number) {
    return this.crmService.findOne(id);
  }

  @MessagePattern('updateCrm')
  update(@Payload() updateCrmDto: UpdateCrmDto) {
    return this.crmService.update(updateCrmDto.id, updateCrmDto);
  }

  @MessagePattern('removeCrm')
  remove(@Payload() id: number) {
    return this.crmService.remove(id);
  }
}
