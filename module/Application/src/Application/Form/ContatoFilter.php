<?php

namespace Application\Form;

use Zend\InputFilter\InputFilter;

class ContatoFilter extends InputFilter{
	
	public function __construct(){
		
		$this->add(array(
			'name' => 'nome',
			'required' => true,
			'filters' => array(
				array('name'=>'StripTags'),
				array('name'=>'StringTrim')
			),
			'validators' => array(
				array(
					'name' => 'NotEmpty',
					'options'=>array(
							'messages' => array('isEmpty'=>'Nome não pode estar em branco'),
					)
				)
			)
		));
		
		$this->add(array(
			'name' => 'email',
			'required' => true,
			'filters' => array(
				array('name'=>'StripTags'),
				array('name'=>'StringTrim')
			),
			'validators' => array(
				array(
					'name' => 'NotEmpty',
					'options'=>array(
						'messages' => array('isEmpty'=>'E-mail não pode estar em branco.'),
					)
				),
				/*array(
					'name' => 'Regex',
					'options' => array(
						'pattern' => '[a-zA-Z]',
						'messages' => array(\Zend\Validator\Regex::INVALID => 'Digite um E-mail valido.')
					)	
				),*/
			)
		));
		
		$this->add(array(
				'name' => 'phone',
				'required' => true,
				'filters' => array(
						array('name'=>'StripTags'),
						array('name'=>'StringTrim')
				),
				'validators' => array(
						array(
								'name' => 'NotEmpty',
								'options'=>array(
										'messages' => array('isEmpty'=>'Telefone não pode estar em branco'),
								)
						)
				)
		));

		$this->add(array(
				'name' => 'destinatario',
				'required' => true,
				'filters' => array(
						array('name'=>'StripTags'),
						array('name'=>'StringTrim')
				),
				'validators' => array(
						array(
								'name' => 'NotEmpty',
								'options'=>array(
										'messages' => array('isEmpty'=>'É necessário selecionar um Destinatário'),
								)
						)
				)
		));
		
		$this->add(array(
				'name' => 'mensagem',
				'required' => true,
				'filters' => array(
						array('name'=>'StripTags'),
						array('name'=>'StringTrim')
				),
				'validators' => array(
						array(
								'name' => 'NotEmpty',
								'options'=>array(
										'messages' => array('isEmpty'=>'Mensagem não pode estar em branco'),
								)
						)
				)
		));
		
	}
	
	
}

?>